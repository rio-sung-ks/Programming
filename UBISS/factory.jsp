<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tile"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<c:set var="ImageType" value="RND004012" />
<fmt:requestEncoding value="utf-8"/>

<style>
body {
    background-color: gray;
    background: url(https://www.ubaseinternational.com/images/common/bg_sub1.png) no-repeat top fixed;
    background-size: cover;
}

main .information {
    width: 100%;
    text-align: center;
    vertical-align: middle;
}

main .information .logo img {
    width: 300px;
}

main .information .title {
    text-align: center;
    vertical-align: middle;
    font-size: 4rem;
    color: #006064;
    font-weight: bold;  
    position: fixed;
    top: 80px;
    right: 10px;  
}

main .menu {    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

main .menu .item {
    border-radius: 5px;
    background-color: #fff;
    color: #000;
/*     box-shadow: 0 3px 5px 1px rgba(0, 0, 0, .2);
    background-color: #fff;
    color: #000;
    border: 1px solid black;
 */}

main .menu .item {
    margin: 10px;
    padding: 5px;
    width: 400px;
    height: 200px;

    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    display: block;
    align-items: center;
    justify-content: left;
}

main .menu .item:hover 
{
	
}

main .menu .item .title {
    font-size: 2rem;
   	width: 100%;
   	text-align: center;
}

main .sub.menu .item .title {
    font-size: 2rem;
}

main .menu .item.on {
    border-color: blue;
    color: blue;
}

main .menu.extend .item {
    min-height: 75px;
    line-height: 75px;
}

main .menu.extend .item .title {
	position: absolute;
	top: 150px;
	bottom: 0;
    font-size: 1.5rem;
    text-align: center;
}

main .menu .item .logo img {
    left: 0;
    top: 0;
    width: 150px;
    height: 140px;
    object-fit: contain;
    background-color: white;
    padding: 5px 10px;
}

@media only screen and (max-width: 1020px) {
    main .menu .item {
    	margin: 5px;
        width: 200px;
        height: 110px;
    }
       
    main .menu .item .logo img {
        width: 100px;
        height: 80px;
        padding: 4px 8px;
    }
    
    main .menu .item .title {
        top: 70px;
    }
    
    
    main .menu .item .title h5 {
        font-size: 1rem;
        margin: 0;
    }

    main .sub.menu .item .title {
        font-size: 1rem;
    }
}



@media only screen and (max-width: 800px) {
    main .menu .item {
        width: 250px;
        height: 125px;
    }

    main .menu .item .title {
        font-size: 1.75rem;
    }

    main .sub.menu .item .title {
        font-size: 2.25rem;
    }

    main .menu .item .logo img {
        width: 100px;
        height: 90px;
        padding: 2px 4px;
    }
}

@media only screen and (max-width: 600px) {
    main .information .logo {
        width: 300px;
    }

    main .information .title {
        text-align: center;
        vertical-align: middle;
        font-size: 1.5rem;
    }

    main .sub.menu .item .title {
        font-size: 1.25rem;
    }

    main .menu .item {
        width: 200px;
        height: 100px;
    }

    main .menu .item .title {
        font-size: 1.5rem;
    }

    main .sub.menu .item .title {
        font-size: 1.5rem;
    }
    
    main .menu .item .logo img {
        width: 70px;
        height: 65px;
        padding: 1px 2px;
    }
}

@media only screen and (max-height: 400px) {
	main > .container {
		padding: 0;
	}
}

@media only screen and (max-height: 300px) {
	main .information .title
	{
		display: none;
	}
}
        </style>

<style>
main .section.container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: 10;
}
</style>

<div class="section container blue-grey lighten-5">
	<div class="information">
        <div class="title">UBISS</div>
    </div>
    
    <div name="mainmenu" class="main menu">
        <div name="mainitem" class="item btn-floating" onclick="goWarehouse()">
        	<div class="logo">
        		<img src="<%= request.getContextPath() %>/resources/image/factory/warehousenew.png" />
        	</div>
        	<div class="title">
            	<h5>WAREHOUSE</h5>
            </div>
        </div>
        
		<div name="mainitem" class="item btn-floating" onclick="goInspection()">
			<div class="logo">
        		<img src="<%= request.getContextPath() %>/resources/image/factory/inspectnew.png" />
        	</div>
        	<div class="title">
            	<h5>INSPECTION</h5>
            </div>
        </div>
	</div>    
	<div name="mainmenu" class="main menu">
	   	<div name="mainitem" class="item btn-floating" onclick="goCuttingPlan()">
			<div class="logo">
        		<img src="<%= request.getContextPath() %>/resources/image/factory/cuttingplan.png" />
        	</div>
        	<div class="title">
            	<h5>CUTTING PLAN</h5>
            </div>
        </div>
        
        <div name="mainitem" class="item btn-floating" onclick="goSpreadingPlan()">
        	<div class="logo">
        		<img src="<%= request.getContextPath() %>/resources/image/factory/spreadingplan.png" />
        	</div>
        	<div class="title">
            	<h5>SPREADING PLAN</h5>
            </div>
        </div>
        <div name="mainitem" class="item btn-floating" onclick="goSpreading()">
        	<div class="logo">
        		<img src="<%= request.getContextPath() %>/resources/image/factory/spreadingnew.png" />
        	</div>
        	<div class="title">
            	<h5>SPREADING</h5>
            </div>
        </div>
        
        <div name="mainitem" class="item btn-floating" onclick="goCutting()">
        	<div class="logo">
        		<img src="<%= request.getContextPath() %>/resources/image/factory/cuttingnew.png" />
        	</div>
        	<div class="title">
            	<h5>CUTTING</h5>
            </div>
        </div>                
  	</div>
</div>
<script type="text/javascript">
function goWarehouse(parameters) {
	const factory = getQRLoginInfo("FactoryCode");
    location.href = `<%= request.getContextPath() %>/warehouse`;
}

function goInspection(parameters) {
	const factory = getQRLoginInfo("FactoryCode");
    location.href = `<%= request.getContextPath() %>/warehouse/inspect/fabric`;
}

function goCuttingPlan(parameters) {
	const factory = getQRLoginInfo("FactoryCode");
	location.href = `<%= request.getContextPath() %>/factory/cutting/plan`;
}

function goSpreadingPlan(parameters) {
	const factory = getQRLoginInfo("FactoryCode");
    location.href = `<%= request.getContextPath() %>/factory/spreading/plan`;
}

function goSpreading(parameters) {
	const factory = getQRLoginInfo("FactoryCode");
    location.href = `<%= request.getContextPath() %>/factory/spreading`;
}

function goCutting(parameters) {
	const factory = getQRLoginInfo("FactoryCode");
	location.href = `<%= request.getContextPath() %>/factory/cutting`;
}
</script>

<script type="text/javascript">
function loadWindow() {
}
</script>
