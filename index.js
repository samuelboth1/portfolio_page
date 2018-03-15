function change(){
			switch(Math.floor(Math.random() * 3)){
    		case 0: 
        	document.body.style.backgroundColor = '#3e3c3a';
     		break;
            case 1:
            document.body.style.backgroundColor = '#464440';
 			break;
            case 2:
           	document.body.style.backgroundColor = '#2b2926';
 			break;
 			case 3:
			document.body.style.backgroundColor = '#565656';
 			break;
 			default:
 			document.body.style.backgroundColor = '#272624';
 			break;
    		}
		}
		for (var i = 0; i < 3; i++) {
			setInterval(change, 1000);
		}