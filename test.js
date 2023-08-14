const mongoose = require('mongoose');
const Post = require('./models/Post');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/NBlog_test_db');
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

// async function createPost() {
//     try {
//         const newPost = await Post.create({
//             title: 'Benim ilk post başlığım',
//             content: 'post içeriği lorem ipsum text'
//         });
//         console.log('New post created:', newPost);
//     } catch (error) {
//         console.error('Error creating post:', error);
//     }
// }




async function main() {
    await connectToDatabase();
    //await createPost();
}

main();
