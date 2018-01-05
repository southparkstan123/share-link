export class Link {
    constructor(
        public id: string,
        public url: string,
        public title: string,
        public isShared: boolean,
        public tags: object
    ) { }
}
