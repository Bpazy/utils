var s1 = "GridView1";
var s2 = "ctl";
var s3 = "RadioButton1"
for (var i = 0; i < 10; i++) {
	var n = 2 + i;
	if (n < 10) {
		n = "0" + n;
	}
	var temp = "#" + s1 + "_" + s2 + n + "_" + s3;
	var r = $(temp);
	r[0].checked = true;
}
var button = $("#Button2")[0];
button.click();