var santai = ""
        var berkualitas = "Berkualitas"

        for (var i = 1; i <= 20; i++) {
            if (i % 2 == 1){
                santai = "Santai"
                console.log(i + ' - ' + santai);
            }
            if (i % 2 == 0) {
                console.log(i + ' - ' + berkualitas);
            }
            if (i == 3 || i == 9 || i == 15){
                santai = "I Love Coding"
                console.log(i + ' - ' + santai)
            }
            
        }