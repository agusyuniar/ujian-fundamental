function lelang(a){
    var ctk = ''
    var harga = 10000
    for(i=0; i<a; i++){
        if(a/2==1){
            harga=harga+(harga*0.2)
        }

        else if(a%4==0){
            harga = harga+(harga*0.1)*(a/4)
        }
        else{
            harga =((harga*a))
        }

        if(harga===30000000){
            return 'barang sudah terjual'
        }
    }
    return Math.ceil(harga)
}
console.log(lelang(2))
console.log(lelang(49))
console.log(lelang(50))
