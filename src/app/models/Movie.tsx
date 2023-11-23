class Movies{
    public id: number;
    public name: string;
    public gender: string;
    public image: string;

    constructor(id: number, name: string, gender: string, image: string){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.image = image;
    }
}
export default Movies;