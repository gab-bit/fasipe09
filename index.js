$(document).ready(
    function(){
        GETUsers();
          
    }
)
function GETUsers(){
    $.ajax({
        type:'GET',
        url:'http://192.168.10.85:9000/users',
        success: function(data){
            $.each(data, function(i, user){
                $('#tabela_user').append(
                    '<tr> ' +
                    '    <td>'+i+'</td>'+
                    '    <td>'+user.guuid+'</td>'+
                    '    <td>'+user.name+'</td>'+
                    '    <td>'+user.cpf+'</td>'+
                    '    <td>'+user.occupation+'</td>'+
                    '</tr>'
                )                    
            })            
        },
        error: function(data){
            console.log(data);
        }
    })
}
