import postPageReducer from "./postPageReducer";
import messPageReducer from "./messPageReducer";

// const POST_UPDATE = 'POST-UPDATE';
// const POSTADD = 'POSTADD';
// const MESSADD = 'MESSADD';
// const MESSUPDATE = 'MESSUPDATE';
 let store = {

   state: {
      postPage: {
         postData: [{ id: 1, post: "Hi! How are you?", likeCount: 20 }, { id: 2, post: "This is my first post", likeCount: 12 }],
         newVal: ''
      },
      messPage: {
         dialogData: [{ id: 1, name: "Артем" }, { id: 2, name: "Саша" }],
         messData: [{ id: 1, mes: "привет" }, { id: 2, mes: "как дела?" }],
         newMess: ''
      },
      sidebar:{}
   },
   reloadPage() {
      console.log("11");
   },
   getState() {
      return this.state;
   },
   subscribe(observer) {
      this.reloadPage = observer;
   },

   // postUpdate(post) {
   //    this.state.postPage.newVal = post;
   //    this.reloadPage(this.state);
   // },

   // postAdd() {
   //    let newPost = {
   //       id:3,
   //       post: this.state.postPage.newVal,
   //       likeCount: 0
   //    };
   //    this.state.postPage.postData.push(newPost);
   //    this.state.postPage.newVal = '';
   //    this.reloadPage(this.state);
   // },
   // messUpdate(mess) {
   //    this.state.messPage.newMess = mess;
   //    this.reloadPage(this.state);
   // },

   // messAdd() {
   //    let newMessage = {
   //       id:4,
   //       mes: this.state.messPage.newMess,
   //    };
   //    if(this.state.messPage.newMess == '') return false;
   //    this.state.messPage.messData.push(newMessage);
   //    this.state.messPage.newMess = '';
   //    this.reloadPage(this.state);
   // },
   dispatch(action){
      this.state.postPage = postPageReducer(this.state.postPage, action);
      this.state.messPage = messPageReducer(this.state.messPage, action);

      this.reloadPage(this.state);
   }
};

export default store;