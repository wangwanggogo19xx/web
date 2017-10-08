var nav = [
	{
		name : "法制档案",
		items: ["法律","行政法规","司法解释"],
		url : "www.baidu.com"
	},
	{
		name : "法制文化",
		items: ["法制漫画","法制文化作品","普法宣传资料"],
		url : "www.baidu.com"
	},
	{
		name : "法制动态",
		items: ["普法","新法速递"],
		url : "www.baidu.com"
	},
	{
		name : "法制服务",
		items: ["法律服务","办事指南","法律援助","公证服务","人民调节"],
		url : "www.baidu.com"
	},
	{
		name : "法制档案",
		items: ["法律","行政法规","司法解释"],
		url : "www.baidu.com"
	},
	{
		name : "法制档案",
		items: ["法律","行政法规","司法解释"],
		url : "www.baidu.com"
	},
	{
		name : "法制档案",
		items: ["法律","行政法规","司法解释"],
		url : "www.baidu.com"
	},
]
var setFrameHeight = function(){
	var mainheight = $("#myFrame").contents().find("body").height() + 30;
    $("#myFrame").height(mainheight);
}

$(function(){
	$("#myFrame").load(function () {
         setFrameHeight();
      });
	$(".document,.culture,.dynamic,.service,.video,.counsel").on('click', function() {
       $(".nav>li").removeClass('active');
       $(this).addClass('active');
       var nav_title = $(this).children('a').html();
       switch(nav_title){
       	case "法制档案":
       		$("#myFrame").attr('src', 'archives.html');
       		break;
   		case "法制文化":
   			$("#myFrame").attr('src', 'culture.html');
   			break;
   		case "法制动态":
   			$("#myFrame").attr('src', 'culture.html');
   			break;
   		case "法制服务":
   			break;
   		case "法制视频":
   			break;
   		case "法制咨询":
   			break;
       }
       
	});
})