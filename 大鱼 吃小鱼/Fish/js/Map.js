function Map() {
    this.init=function () {
        const imgs = ['img/bg.jpg','img/bg1.jpg'];

        const box = document.getElementById('box');
        let imgBox = imgs.map((s, i) => {
            const img = document.createElement('img');
            img.style.width = '1180px';
            img.style.height = '640px';
            img.src = s;
            img.style.position = "absolute";
            const imgX = 1180 * i;
            img.style.left = imgX + 'px';
            box.appendChild(img);
            return {img, imgX};
        });
        requestAnimationFrame(run);


        function run() {
            imgBox.forEach(function (box) {
                box.imgX += 1;

                if (box.imgX >= 1180) {
                    box.imgX -= 1180 * imgBox.length;
                }
                box.img.style.left = box.imgX + 'px';
            });
            requestAnimationFrame(run)
        }
    };
}
