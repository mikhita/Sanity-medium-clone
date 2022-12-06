export interface Post{
    _id: string;
    _createdAt: strring;
    title: string;
    author:{
        name: string;
        image: string
    };
    description: string;
    mainImage:{
        assets:{
            url:string
        }
    };
    slug:{
        current: string;
    };
    body: [object];


}