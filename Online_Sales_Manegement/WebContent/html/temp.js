	function load(){
	document.getElementById("usernameMsg").innerHTML='Username is case sensitive';
	}
	function checkUsername(val){
			if(val==""||val.trim()==""){
				document.getElementById("usernameMsg").innerHTML='Empty Username';
				return false;
				}
			else if(val!="test"){
					document.getElementById("usernameMsg").innerHTML='Invalid Username';
					var s=document.getElementById("username")
					s.value='';
					return false;
				}
			else{
				document.getElementById("usernameMsg").innerHTML='';
				return true;
			}
		}
	function checkSubmit(){
		if(document.getElementById("password").value!="test"){
				document.getElementById("password").value=="";
				document.getElementById("passwordMsg").innerHTML='Invalid Password';
				return false;
			}
	}
	function submitSelectable(val){
		if(val!=""||val.trim()!=""){
				document.getElementById('LoginButton').disabled = false;
				return false;
			}
		if(val!="test"){
			document.getElementById('LoginButton').disabled = true;
			return false;
			}
	}
