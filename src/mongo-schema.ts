/*
 * @Author: Mr.Car
 * @Date: 2024-09-05 16:46:46
 */
import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

postSchema.pre('save', function (next) {
// 添加你的逻辑代码
console.log('post is about to be saved!');
next();
});

const Post = mongoose.model('Post', postSchema);
export default Post