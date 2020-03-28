
 let store = {

   state: {
      postPage: {
         postData: [{ id: 1, post: "Hi! How are you?", likeCount: 20 }, { id: 2, post: "This is my first post", likeCount: 12 }],
         newVal: ''
      },
      messPage: {
         dialogData: [{ id: 1, name: "Артем" }, { id: 2, name: "Саша" }],
         messData: [{ id: 1, mes: "привет" }, { id: 2, mes: "как дела?" }]
      }
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

   postUpdate(post) {
      this.state.postPage.newVal = post;
      this.reloadPage(this.state);
   },

   postAdd() {
      let newPost = {
         id:3,
         post: this.state.postPage.newVal,
         likeCount: 0
      };
      this.state.postPage.postData.push(newPost);
      this.state.postPage.newVal = '';
      this.reloadPage(this.state);
   },
   
   dispatch(action){
      if(action.type === 'POST-UPDATE'){
         this.postUpdate(action.post);
      } else if(action.type === 'POSTADD'){
         this.postAdd();
      }
   }
};


export default store;