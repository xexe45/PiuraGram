export class Post {
    constructor(
        public usuario_id: string,
        public imagen: string,
        public post: string,
        public _id?: string,
        public usuario?: any ) {
    }
}
