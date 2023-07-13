class taiyaki{
    constructor(nakami){
        this.nakami = nakami;
    }
    gu(){
        console.log(`中身は${this.nakami}です`);
    }
}
let annko = new taiyaki('あんこ');
let cream = new taiyaki('クリーム');
let cheese = new taiyaki('チーズ');
annko.gu();
cream.gu();
cheese.gu();