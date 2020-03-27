
let postData = [{ id: 1, post: "Hi! How are you?", likeCount: 20 }, { id: 2, post: "This is my first post", likeCount: 12 }]

let dialogData = [{ id: 1, name: "Артем" }, { id: 2, name: "Саша" }];
let messData = [{ id: 1, mes: "привет" }, { id: 2, mes: "как дела?" }];

let state = {

   postPage: {
    postData: [{ id: 1, post: "Hi! How are you?", likeCount: 20 }, { id: 2, post: "This is my first post", likeCount: 12 }],
   },
   messPage: {
    dialogData: [{ id: 1, name: "Артем" }, { id: 2, name: "Саша" }],
    messData: [{ id: 1, mes: "привет" }, { id: 2, mes: "как дела?" }]
   }

}

export default state;