function Dialog(id) {
    this.id = id;
    this.close_handler = null;
    var that = this;
    document.getElementById(id).children[0].onclick = function () {
        that.close();
        if (typeof that.close_handler == 'function') {
            that.close_handler();
        }
    }
}

function openDialog() {
    document.getElementById('pageCover').style.display = 'block';
    var dlg = new Dialog('dlgTest');
    dlg.show();
    dlg.close_handler = function () {
        document.getElementById('pageCover').style.display = 'none';
    }
}

http://pt47a.busdisk.net/dl.php?ZTk0OXpIdllFdXZOQzdNN21XZW5jN0hab0x1UE1ydlVnaGZCZ2EzSi96YU9TRmhlWko2UEZiNmpwWFBJY1ByRi9Gdk4zUmNtRE5VT1hRaGZXc3FOOHVnUHlnRENCaEU5b3VlV1VCQkx5WHJ6bVUxVFptUjFmaWdkVSt6ME9VKzRkOW9zdU82MS9iMk8ycDZkZ1VZaktoVWFKeTZiL3VucDBYaWVML0dWV3VzeXJWQmZYbkh3ai9ybGF4REVwTVZpMUdJZ2Z0dklweEdDTzFjUHBOR2NIYkZtaVVrdmZKcUw3bXMzNTBaUE9OVU0%3D
    <a href="http://pt47a.busdisk.net/dl.php?ZTk0OXpIdllFdXZOQzdNN21XZW5jN0hab0x1UE1ydlVnaGZCZ2EzSi96YU9TRmhlWko2UEZiNmpwWFBJY1ByRi9Gdk4zUmNtRE5VT1hRaGZXc3FOOHVnUHlnRENCaEU5b3VlV1VCQkx5WHJ6bVUxVFptUjFmaWdkVSt6ME9VKzRkOW9zdU82MS9iMk8ycDZkZ1VZaktoVWFKeTZiL3VucDBYaWVML0dWV3VzeXJWQmZYbkh3ai9ybGF4REVwTVZpMUdJZ2Z0dklweEdDTzFjUHBOR2NIYkZtaVVrdmZKcUw3bXMzNTBaUE9OVU0%3D"
       onClick="down_process2('1428089');" target="_blank" className="bt"
       style="background-color:#ccc"><span>&nbsp;普通下载</span></a>
var file_id = '1428089';
// vipd==1 可能为vip下载链接
var vipd;
$.ajax({
    type: 'post',
    url: 'ajax.php',
    data: 'action=load_down_addr1&file_id=' + file_id + '&vipd=' + vipd,
    dataType: 'text',
    success: function (msg) {
        var arr = msg.split('|');
        if (arr[0] == 'true') {
            $('#addr_list' + vipd).html(arr[1]);
        } else {
            $('#addr_list' + vipd).html(msg);
        }
    },
    error: function () {
    }
});