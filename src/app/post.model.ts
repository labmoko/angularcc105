export class Post{
    constructor(
        public title: string,
        public imgPath: string,
        public videoUrl: string,
        public description: string,
        public author: string,
        public dateCreated: Date ,
        public numberOfLikes: number,
        public numberOfDislikes: number = 0,
        public comment: string[]=[] ){
            
        }
}