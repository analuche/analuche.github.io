$(document).ready(function(){
     $('#eventos').click(function(){
        $("#inicial").hide();
        $("#contatos").hide();
        $("#lema").hide();
        $("#evento").show();
        $("#mini").hide();
        $("#juvenil1").hide();
        $("#mirim1").hide();
        $("#adulta1").hide();
        $("#xiru").hide();
        $("#desJuv").hide();
        $("#desMini").hide();
        $("#desMirim").hide();
        $("#desAdul").hide();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
        
    });
    $('#contato').click(function(){
        $("#inicial").hide();
        $("#evento").hide();
        $("#lema").hide();
        $("#contatos").show();
        $("#mini").hide();
        $("#juvenil1").hide();
        $("#mirim1").hide();
        $("#adulta1").hide();
        $("#xiru").hide();
        $("#desJuv").hide();
        $("#desMini").hide();
        $("#desMirim").hide();
        $("#desAdul").hide();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
        
    });
    $('#logoImg').click(function(){
        $("#inicial").show(1000);
        $("#lema").show(1500);
        $("#contatos").hide();
        $("#mini").hide();
        $("#evento").hide();
        $("#juvenil1").hide();
        $("#mirim1").hide();
        $("#adulta1").hide();
        $("#xiru").hide();
        $("#desJuv").hide();
        $("#desMini").hide();
        $("#desMirim").hide();
        $("#desAdul").hide();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
        
    });
    $('#miniMirim').click(function(){
        $("#inicial").hide();
        $("#contatos").hide();
        $("#evento").hide();
        $("#juvenil1").hide();
        $("#mirim1").hide();
        $("#adulta1").hide();
        $("#xiru").hide();
        $("#lema").hide();
        $("#mini").show();
        $("#desJuv").hide();
        $("#desMini").show();
        $("#desMirim").hide();
        $("#desAdul").hide();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
        
    });
    $('#mirim').click(function(){
        $("#inicial").hide();
        $("#contatos").hide();
        $("#evento").hide();
        $("#juvenil1").hide();
        $("#mini").hide();
        $("#adulta1").hide();
        $("#xiru").hide();
        $("#lema").hide();
        $("#mirim1").show();
        $("#desJuv").hide();
        $("#desMini").hide();
        $("#desMirim").show();
        $("#desAdul").hide();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
        
    });
    $('#juvenil').click(function(){
        $("#inicial").hide();
        $("#contatos").hide();
        $("#evento").hide();
        $("#juvenil1").show();
        $("#mini").hide();
        $("#adulta1").hide();
        $("#xiru").hide();
        $("#mirim1").hide();
        $("#lema").hide();
        $("#desJuv").show();
        $("#desMini").hide();
        $("#desMirim").hide();
        $("#desAdul").hide();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
  
    });
    $('#adulta').click(function(){
        $("#inicial").hide();
        $("#contatos").hide();
        $("#evento").hide();
        $("#juvenil1").hide();
        $("#mini").hide();
        $("#adulta1").show();
        $("#xiru").hide();
        $("#mirim1").hide();
        $("#lema").hide();
        $("#desJuv").hide();
        $("#desMini").hide();
        $("#desMirim").hide();
        $("#desAdul").show();
        $("#desXiru").hide();
        $("#gmail").hide();
        $("#telefones").hide();
       
    });
    $('#veterana').click(function(){
        $("#inicial").hide();
        $("#contatos").hide();
        $("#evento").hide();
        $("#juvenil1").hide();
        $("#mini").hide();
        $("#adulta1").hide();
        $("#xiru").show();
        $("#mirim1").hide();
        $("#lema").hide();
        $("#desJuv").hide();
        $("#desMini").hide();
        $("#desMirim").hide();
        $("#desAdul").hide();
        $("#desXiru").show();
        $("#gmail").hide();
        $("#telefones").hide();
    });
    $('#mail').click(function(){
      $("#gmail").show(800);
      $("#telefones").hide();
    });
    $('#tele').click(function(){
      $("#telefones").show(800);
      $("#gmail").hide();
      
    });
});
