class NinoVerifier{
    constructor() {
        this.ninoregex=new RegExp('[A-Z]{2}[1-9]{6}[A-Z]')
    }
    verify(nino){
        return this.ninoregex.test(nino)
    }
}
export default NinoVerifier