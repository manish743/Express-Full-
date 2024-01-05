import { Schema } from "mongoose";

let userSchema = Schema({
  profilePic: {
    type: String,
    required: [true, "profilePic is required"],
  },
  resume: {
    type: String,
    required: [true, "resume is required"],
  },
  name: {
    type: String,
    required: [true, "Name field is required"],
    // lowercase : true,
    // uppercase: true,
    trim: true,
    minLength: 3,
    maxLength: 10,
    // name field must be only alphabet and number
    validate: (value) => {
      let isValid = /^[a-zA-Z0-9\s]*$/.test(value);
      if (!isValid) {
        throw new Error("Only alphabet and number are allowed");
      }
    },
  },
  age: {
    type: Number,
    required: [true, "Age field is required"],
    validate: (value) => {
      if (value === 36) {
        throw new Error("Unable to register due to age factor");
      }
    },
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Phone Number field is required"],
    unique: true,
    validate: (value) => {
      let strValue = String(value);
      if (strValue.length !== 10) {
        throw new Error("Phone number must be exact 10 characters long");
      }
    },
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is required"],
  },
  spouseName: {
    type: String,
    required: [
      function () {
        if (this.isMarried) {
          return true;
        } else {
          return false;
        }
      },
      "Spouse Name field is required",
    ],
  },
  gender: {
    type: String,
    required: [true, "Gender field is required"],
  },
  dob: {
    type: Date,
    required: [true, "DOB field is required"],
    default: new Date(),
  },
  location: {
    country: {
      type: String,
      required: [true, "Country field is required"],
    },
    exactLocation: {
      type: String,
      required: [true, "Exact location field is required"],
    },
  },
  favTeacher: [
    {
      type: String,
      required: [true, "Fav teacher field is required"],
    },
  ],
  favSubject: [
    {
      bookName: {
        type: String,
        required: [true, "Book name field is required"],
      },
      bookAuthor: {
        type: String,
        required: [true, "Book author field is required"],
      },
    },
  ],
});

export default userSchema;
