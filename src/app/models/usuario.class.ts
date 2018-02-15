export class Usuario {

    constructor(
        public email: string,
        public nombre: string,
        public username: string,
        public password: string,
        public _id?: string,
        public phone?: number,
        public sex?: string,
        public birthday?: string,
        public bio?: string,
        public website?: string,
        public img?: string
    ) {

    }
}
