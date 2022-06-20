import { Schema, model, mongoose } from "mongoose";

const WorkoutSchema = new Schema(
    {
      muscularGroup: { 
        type: String, 
        required: true, 
        unique: true 
      },
      exercise: {
        type: String,
        required: true,
        unique:true
      },
      weight: {
        type: String,
        required: true,
        trim:true
      },
      reps: {
        type: String,
        required: true,
        trim:true
      },
      series:{
        type:String,
        required: false,
        time:true
      },
      estado: {
        type: Boolean,
        default:true,
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: "You should add an author."
      }
    },
    {
      timestamps: true,
    }
  );
  

export default model("Workout", WorkoutSchema);
