import { Register } from "../Schema/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";
import { sendMail } from "../utils/sendmail.js";

export let createRegister = async (req, res, next) => {
  try {
    let data = req.body;
    let hashPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashPassword,
    };

    let result = await Register.create(data);

    // sending email with link
    let infoObj = {
      id: result._id,
    };

    let expiryInfo = {
      expiresIn: "10d",
    };

    let token = jwt.sign(infoObj, secretKey, expiryInfo);

    await sendMail({
      from: '"Manish" <shresthamanish606@gmail.com>',
      to: [data.email],
      subject: "Account create",
      html: `
      <h1>Your account has been created successfully.<h1>
      
      <a href="http://localhost:8000/verify-email?token=${token}">http://localhost:8000/verify-email?token=${token}</a>
      `,
    });

    res.json({
      success: true,
      message: "Registered successfully.",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let verifyEmail = async (req, res, next) => {
  try {
    // get token
    let bearerToken = req.headers.authorization;
    let token = bearerToken.split(" ")[1];

    // verify token
    let isValidToken = jwt.verify(token, secretKey);

    let userId = isValidToken.id;

    let result = await Register.findByIdAndUpdate(
      userId,
      {
        isVerifiedEmail: true,
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "User verified successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let loginUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await Register.findOne({ email: email });

    if (user) {
      if (user.isVerifiedEmail) {
        let isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          let infoObj = {
            id: user._id,
          };
          let expiryInfo = {
            expiresIn: "365d",
          };
          let token = jwt.sign(infoObj, secretKey, expiryInfo);

          res.json({
            success: true,
            message: "User login successful",
            data : user,
            token: token,
          });
        } else {
          throw new Error("Credentials doesn't match");
        }
      } else {
        throw new Error("Credentials doesn't match");
      }
    } else {
      throw new Error("Credentials doesn't match");
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let myProfile = async (req, res, next) => {
  try {
    let userId = req.id;
    let userDetails = await Register.findById(userId);

    res.json({
      success: true,
      message: "User credentials read successfully",
      result: userDetails,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateProfile = async (req, res, next) => {
  try {
    let userId = req.id;
    let data = req.body;
    delete data.email;
    delete data.password;

    let updateDetails = await Register.findByIdAndUpdate(userId, data, {
      new: true,
    });

    res.json({
      success: true,
      message: "User credentials updated successfully",
      result: updateDetails,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updatePassword = async (req, res, next) => {
  try {
    let userId = req.id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    let data = await Register.findById(userId);
    let hashPassword = data.password;

    let isValidPassword = await bcrypt.compare(oldPassword, hashPassword);

    if (isValidPassword) {
      let newHashPassword = await bcrypt.hash(newPassword, 10);
      let savePassword = await Register.findByIdAndUpdate(
        userId,
        { password: newHashPassword },
        { new: true }
      );
      res.json({
        success: true,
        message: "Password updated successfully",
        data: savePassword,
      });
    } else {
      throw new Error("Password doesn't match");
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllUser = async (req, res, next) => {
  try {
    let result = await Register.find({});
    res.json({
      success: true,
      message: "All users read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let result = await Register.findById(userId);
    res.json({
      success: true,
      message: "Specific user read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateSpecificUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let data = req.body;
    delete data.email;
    delete data.password;
    let result = await Register.findByIdAndUpdate(userId, data, { new: true });
    res.json({
      success: true,
      message: "Specific user updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteSpecificUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    let result = await Register.findByIdAndDelete(userId, { new: true });
    res.json({
      success: true,
      message: "Specific user deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let result = await Register.findOne({ email: email });

    if (result) {
      let infoObj = {
        id: result._id,
      };
      let expiryInfo = {
        expiresIn: "5d",
      };

      let token = jwt.sign(infoObj, secretKey, expiryInfo);

      await sendMail({
        from: '"Manish" <shresthamanish606@gmail.com>',
        to: email,
        subject: "Reset Password",
        html: `
        <h1>Click the link given below to reset password<h1>
        
        <a href="http://localhost:8000/reset-password?token=${token}">http://localhost:8000/reset-password?token=${token}</a>
        `,
      });

      res.status(200).json({
        success: true,
        message: "To reset password link has been sent to the email.",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Email doesn't exist",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let resetPassword = async (req, res, next) => {
  try {
    let id = req.id;
    let hashPassword = await bcrypt.hash(req.body.password, 10);

    let updatePassword = await Register.findByIdAndUpdate(
      id,
      { password: hashPassword },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Password reset successfully",
      result: updatePassword,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};


