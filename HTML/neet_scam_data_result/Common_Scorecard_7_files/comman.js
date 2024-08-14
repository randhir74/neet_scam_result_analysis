/******** ONly Leter no space and no special character **********/

function isFloatNumber(item, evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46) {
        //console.log($(item).val());
        var regex = new RegExp(/\./g);
        var count = $(item).val().match(regex).length;
        if (count > 1) {
            return false;
        }
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function lettersOnly() {
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32)

        return true;
    else
        return false;
}

function numericaOnly() {
    var charCode = event.keyCode;

    if ((charCode > 48 && charCode < 57) || charCode == 8)

        return true;
    else
        return false;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


/* Remove Dubal space bar */

function isWhiteSpace(char) {
    return (/\s/).test(char);
}
function willCreateWhitespaceSequence(evt) {
    var willCreateWSS = false;
    if (isWhiteSpace(evt.key)) {

        var elmInput = evt.currentTarget;
        var content = elmInput.value;

        var posStart = elmInput.selectionStart;
        var posEnd = elmInput.selectionEnd;

        willCreateWSS = (
            isWhiteSpace(content[posStart - 1] || '')
            || isWhiteSpace(content[posEnd] || '')
        );
    }
    return willCreateWSS;
}

function isAlfa(evt) {

    evt = (evt || window.event);
    var charCode = (evt.which || evt.keyCode);

    return ((
        (charCode > 32)
        && (charCode < 65 || charCode > 90)
        && (charCode < 97 || charCode > 122)

    ) || willCreateWhitespaceSequence(evt)) ? false : true;
}

function isAlfaNumeric(evt) {

    evt = (evt || window.event);
    var charCode = (evt.which || evt.keyCode);

    return ((
        (charCode > 32)
        && (charCode < 64 || charCode > 91)
        && (charCode < 96 || charCode > 123)
        && (charCode == 8 || charCode == 32)

    ) || willCreateWhitespaceSequence(evt)) ? false : true;
}

function lastdayofmonth() {
    var Year = $("#Year :selected").val();
    var Month = $("#Month :selected").val();
    var date_time = new Date((new Date(Year, Month, 1)) - 1)
    //console.log(date_time);
    convert(date_time)

}

function convert(str) {
    var date = new Date(str);
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    $("#Day option").attr("disabled", false);

    if (mnth == 2) {
        day = 29;
    }
    if (($("#Year :selected").val() > 0 && (0 == $("#Year :selected").val() % 4) && mnth == 2)) {
        day = 29;
    }
    else if (($("#Year :selected").val() > 0 && (0 != $("#Year :selected").val() % 4) && mnth == 2)) {
        day = 28;
    }
    if (($("#Day :selected").val() > day)) {
        $('#Day').val('');
    }
    for (var i = 31; i > day; i--) {
        $("#Day option:contains('" + i + "')").attr("disabled", "disabled");
    }
    return day;
}

function blockSpecialChar(e, action = 'alpha') {
    var k = e.keyCode;
    //console.log(k);
    var status = ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32);
    if (action == 'alpha') {
        status = ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32);
    } else if (action == 'alphanumeric') {
        status = ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    } else if (action == 'alphanumericspeciaslsome') {
        //((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k== 32 || k == 44 || k == 47 || k == 92 || (k >= 48 && k <= 57));
        status = ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    } else if (action == 'characterNumericAndAllowSomespecials') {
        status = /^[a-zA-Z0-9 :.,&/-]*$/i.test(e.key);
    } else if (action == 'characterNumericAndAllowTwopecials') {
        status = /^[a-zA-Z0-9 /-]*$/i.test(e.key);
    } else if (action == 'numeric') {
        status = ((k >= 48 && k <= 57));
    } else if (action == 'numericFloat') {
        status = ((k >= 48 && k <= 190) || k == 46);
    } else if (action == 'numericplushdot') {
        status = /^[0-9.]*$/i.test(e.key);
    }
    return status;
}
// remove double space 
$('form .form-control').on('keydown', function (e) {
    var input = $(this).attr('id');
    var input = e.target;
    var val = input.value;
    var end = input.selectionEnd;
    if (e.keyCode == 32 && (val[end - 1] == " " || val[end] == " ")) {
        e.preventDefault();
        return false;
    }
});


$(document).ready(function () {
    lastdayofmonth();
     $('#flexCheckDefaultReg').on('click', function () {
           var PremisesName=$('#pr_Premises_Name').val();
           var Locality    =$('#pr_Locality').val();
           var SubLocality =$('#pr_SubLocality').val();
           var CountryID   =$('#pr_CountryID').val();
           var StateUTID   =$('#pr_StateUTID').val();
           var DistrictID=$('#pr_DistrictID').val();
           var PinCode=$('#pr_PinCode').val();
            
          if(PremisesName!='' && Locality!='' && CountryID !='' && PinCode!=''){
            if ($('#flexCheckDefaultReg').is(":checked")) {
           

                if(CountryID!='' && StateUTID!='' && DistrictID!='' && CountryID == 1){
                    //alert('checked_1');
                        $('#p_Premises_Name').val(PremisesName);
                        $('#p_SubLocality').val(SubLocality);
                        $('#p_Locality').val(Locality);
                        $('#p_PinCode').val(PinCode);
                        $("#p_StateDiv").show();
                        $("#p_DistrictDiv").show();
                        $('#p_CountryID').val(CountryID).attr("selected","selected");
                        var statetxt = $('#pr_StateUTID option:selected').text();
                        $('#p_StateUTID').html("<option value='" + StateUTID + "'>" + statetxt + "</option>");
                        $('#p_StateUTID option[value=' + StateUTID + ']').attr("selected", "selected");
                        var districttxt = $('#pr_DistrictID option:selected').text();
                        $('#p_DistrictID').html("<option value='" + DistrictID + "'>" + districttxt + "</option>");
                        $('#p_DistrictID option[value=' + DistrictID + ']').attr("selected", "selected");
                        $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', true);
                        $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                        'pointer-events': 'none', 'background-color': '#e9ecef',
                        'opacity': '1'
                        });

                }else if(CountryID!=''  && StateUTID =='' && DistrictID =='' &&  CountryID != 1){
                    //alert('checked_Not_1');
                    $('#p_Premises_Name').val(PremisesName);
                    $('#p_SubLocality').val(SubLocality);
                    $('#p_Locality').val(Locality);
                    $('#p_PinCode').val(PinCode);
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $('#p_CountryID').val(CountryID).attr("selected","selected");
                     $('#p_StateUTID').empty();
                     $('#p_StateUTID').html('<option value="">--Select--</option>');
                     $('#p_DistrictID').empty();
                     $('#p_DistrictID').html('<option value="">--Select--</option>');
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': 'none', 'background-color': '#e9ecef',
                    'opacity': '1'
                     });
                }else{
                    // alert('checked_Not_IN_out');
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $('#p_CountryID').val('');
                     $('#p_StateUTID').empty();
                     $('#p_StateUTID').html('<option value="">--Select--</option>');
                     $('#p_DistrictID').empty();
                     $('#p_DistrictID').html('<option value="">--Select--</option>');
                }
            }
            else if (!$('#flexCheckDefaultReg').is(":checked")){
                // $('#p_Premises_Name').val(PremisesName);
                // $('#p_SubLocality').val(SubLocality);
                // $('#p_Locality').val(Locality);
                // $('#p_PinCode').val(PinCode);
                if(CountryID!='' && CountryID == 1){
                    //alert('Unchecked_1');
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $('#p_CountryID').val('');
                     $('#p_StateUTID').empty();
                     $('#p_StateUTID').html('<option value="">--Select--</option>');
                     $('#p_DistrictID').empty();
                     $('#p_DistrictID').html('<option value="">--Select--</option>');
                    $('#p_Premises_Name').val('');
                    $('#p_SubLocality').val('');
                    $('#p_Locality').val('');
                    $('#p_PinCode').val('');
                    $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', false);
                    $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                    });

                }else if(CountryID!='' && CountryID != 1){
                    // alert('Unchecked_1_outIndia');
                    $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $('#p_CountryID').val('');
                     $('#p_StateUTID').empty();
                     $('#p_StateUTID').html('<option value="">--Select--</option>');
                     $('#p_DistrictID').empty();
                     $('#p_DistrictID').html('<option value="">--Select--</option>');
                    $('#p_Premises_Name').val('');
                    $('#p_SubLocality').val('');
                    $('#p_Locality').val('');
                    $('#p_PinCode').val('');
                    $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', false);
                    $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                    });
              
                }else{
                  //  alert('Unchecked_Both_outIndia');
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $('#p_CountryID').val('');
                     $('#p_StateUTID').empty();
                     $('#p_StateUTID').html('<option value="">--Select--</option>');
                     $('#p_DistrictID').empty();
                     $('#p_DistrictID').html('<option value="">--Select--</option>');
                    $('#p_Premises_Name').val('');
                    $('#p_SubLocality').val('');
                    $('#p_Locality').val('');
                    $('#p_PinCode').val('');
                    $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', false);
                    $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                    });

                }



            }


          }else{
            
            $('#flexCheckDefaultReg').prop('checked', false);
          }

     })

$('.uncheckedPerA ').on('keypress change',function(){
    if ($('#flexCheckDefaultReg').is(":checked")) {
                $("#p_StateDiv").hide();
                $("#p_DistrictDiv").hide();
                $('#p_CountryID').val('');
                $('#p_StateUTID').empty();
                $('#p_StateUTID').html('<option value="">--Select--</option>');
                $('#p_DistrictID').empty();
                $('#p_DistrictID').html('<option value="">--Select--</option>');
                $('#p_Premises_Name').val('');
                $('#p_SubLocality').val('');
                $('#p_Locality').val('');
                $('#p_PinCode').val('');
                $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', false);
                $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                'pointer-events': '', 'background-color': '',
                'opacity': ''
                });
                $('#flexCheckDefaultReg').prop('checked', false);


    }
    
});

       $("#pr_CountryID").change(function() {
       
            var getPrCountryID = $(this).val();
            if (getPrCountryID == 1) {
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("maxlength", "10");
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("minlength", "10");
               
                $("#pr_StateDiv").show();
                $("#pr_DistrictDiv").show();
                $("#pr_StateUTID").empty();
                $("#pr_DistrictID").empty();

                $("#pr_PinCode").attr("maxlength", "6");
                $("#pr_PinCode").val("");
                $("#pr_PinCode").attr("onkeypress", "return blockSpecialChar(event,'numeric')");
                $.ajax({
                    type: "POST",
                    url: "statewithdbpriority",
                    data:{Countryvalue:getPrCountryID},
                    async:false,
                     beforeSend: function() {
                        SimpleLoading.start();
                      },
                    success: function(response) {
                         var Data = $.parseJSON(response);
                        $("select#pr_StateUTID").html(Data.response);
                        $("select#pr_DistrictID").empty();
                        $("#pr_DistrictID").html('<option value="">--Select--</option>');
                        SimpleLoading.stop();
                         $("#pr_StateUTID").blur();
                 $("#pr_DistrictID").blur();
                 $("#p_StateUTID").blur();
                 $("#p_DistrictID").blur();
                 
                    },
                    failure: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                    error: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                });

            } else {
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("maxlength", "15");
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("minlength", "6");
               // $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").val("");
                $("#pr_StateUTID").empty();
                $("#pr_DistrictID").empty();
                $("#pr_StateUTID").html('<option value="">--Select--</option>');
                $("#pr_DistrictID").html('<option value="">--Select--</option>');
                $("#pr_StateDiv").hide();
                $("#pr_DistrictDiv").hide();
                if ($("#flexCheckDefaultReg").is(":checked")) {
                    $("#p_StateDiv").hide();
                    $("#p_DistrictDiv").hide();
                }
                $("#pr_PinCode").attr("maxlength", "15");
                $("#pr_PinCode").attr("minlength", "2");
                $("#pr_PinCode").val("");
                $("#pr_PinCode").attr("onkeypress", "return blockSpecialChar(event,'alphanumeric')");
            }

        });

        $("#pr_StateUTID").change(function() {
            var getStateID = $(this).val();
            $("#pr_DistrictID").empty();
            $("#pr_DistrictID").html('<option value="">--Select--</option>');
            if (getStateID != '') {
                $.ajax({
                    type: "POST",
                    url: "districtwithdbpriority",
                    data:{Statevalue:getStateID},
                    async:false,
                     beforeSend: function() {
                        SimpleLoading.start();
                      },
                    success: function(response) {
                         var Data = $.parseJSON(response);
                         $( "select#pr_DistrictID" ).html( Data.response );
                       
                        SimpleLoading.stop();
                         $("#pr_StateUTID").blur();
                 $("#pr_DistrictID").blur();
                 $("#p_StateUTID").blur();
                 $("#p_DistrictID").blur();
                 
                    },
                    failure: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                    error: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                });

            } else {
                 $("#pr_DistrictID").empty();
                 $("#pr_DistrictID").html('<option value="">--Select--</option>'); 
            }

        });

         $("#p_CountryID").change(function() {
            var getPrCountryID = $(this).val();

            if (getPrCountryID == 1) {
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("maxlength", "10");
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("minlength", "10");
               // $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").val("");
                $("#p_StateDiv").show();
                $("#p_DistrictDiv").show();
                $("#p_StateUTID").empty();
                $("#p_DistrictID").empty();

                $("#p_PinCode").attr("maxlength", "6");
                $("#p_PinCode").val("");
                $("#p_PinCode").attr("onkeypress", "return blockSpecialChar(event,'numeric')");
                $.ajax({
                    type: "POST",
                    url: "statewithdbpriority",
                    data:{Countryvalue:getPrCountryID},
                    async:false,
                     beforeSend: function() {
                        SimpleLoading.start();
                      },
                    success: function(response) {
                         var Data = $.parseJSON(response);
                        $("select#p_StateUTID").html(Data.response);
                        $("select#p_DistrictID").empty();
                        $("#p_DistrictID").html('<option value="">--Select--</option>');
                        SimpleLoading.stop();
                         $("#pr_StateUTID").blur();
                 $("#pr_DistrictID").blur();
                 $("#p_StateUTID").blur();
                 $("#p_DistrictID").blur();
                 
                    },
                    failure: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                    error: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                });

            } else {
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("maxlength", "15");
                $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").attr("minlength", "6");
              //  $("#CandidateMobile,#ConfirmCandidateMobile,#AlternateMobile").val("");
                $("#p_StateUTID").empty();
                $("#p_DistrictID").empty();
                $("#p_StateUTID").html('<option value="">--Select--</option>');
                $("#p_DistrictID").html('<option value="">--Select--</option>');
                $("#p_StateDiv").hide();
                $("#p_DistrictDiv").hide();
                if ($("#flexCheckDefaultReg").is(":checked")) {
                    $("#p_StateDiv").hide();
                    $("#p_DistrictDiv").hide();
                }
                $("#p_PinCode").attr("maxlength", "15");
                $("#p_PinCode").attr("minlength", "2");
                $("#p_PinCode").val("");
                $("#p_PinCode").attr("onkeypress", "return blockSpecialChar(event,'alphanumeric')");
            }

        })
        $("#p_StateUTID").change(function() {
            var getStateID = $(this).val();
            $("#p_DistrictID").empty();
            $("#p_DistrictID").html('<option value="">--Select--</option>');
            if (getStateID != '') {
                $.ajax({
                    type: "POST",
                    url: "districtwithdbpriority",
                    data:{Statevalue:getStateID},
                    async:false,
                     beforeSend: function() {
                        SimpleLoading.start();
                      },
                    success: function(response) {
                         var Data = $.parseJSON(response);
                         $( "select#p_DistrictID" ).html( Data.response );
                       
                        SimpleLoading.stop();
                    },
                    failure: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                    error: function(response) {
                        console.log(response);
                         SimpleLoading.stop();
                    },
                });

            } else {
                 $("#p_DistrictID").empty();
                 $("#p_DistrictID").html('<option value="">--Select--</option>'); 
            }

        })


           var PremisesName=$('#pr_Premises_Name').val();
           var Locality    =$('#pr_Locality').val();
           var SubLocality =$('#pr_SubLocality').val();
           var CountryID   =$('#pr_CountryID').val();
           var StateUTID   =$('#pr_StateUTID').val();
           var DistrictID=$('#pr_DistrictID').val();
           var PinCode=$('#pr_PinCode').val();
           var PermanentCountryID =$('#p_CountryID').val()
            
          if(PremisesName!='' && Locality!='' && CountryID !='' && PinCode!=''){
            if ($('#flexCheckDefaultReg').is(":checked")) {
                $('#p_Premises_Name').val(PremisesName);
                $('#p_SubLocality').val(SubLocality);
                $('#p_Locality').val(Locality);
                $('#p_PinCode').val(PinCode);
                if(CountryID!='' && PermanentCountryID!='' && CountryID == 1 && PermanentCountryID == 1){
                        $("#p_StateDiv").show();
                        $("#p_DistrictDiv").show();
                        $('#p_CountryID').val(CountryID).attr("selected","selected");
                        var statetxt = $('#pr_StateUTID option:selected').text();
                        $('#p_StateUTID').html("<option value='" + StateUTID + "'>" + statetxt + "</option>");
                        $('#p_StateUTID option[value=' + StateUTID + ']').attr("selected", "selected");
                        var districttxt = $('#pr_DistrictID option:selected').text();
                        $('#p_DistrictID').html("<option value='" + DistrictID + "'>" + districttxt + "</option>");
                        $('#p_DistrictID option[value=' + DistrictID + ']').attr("selected", "selected");
                        $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', true);
                        $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                        'pointer-events': 'none', 'background-color': '#e9ecef',
                        'opacity': '1'
                        });

                }else if(CountryID!='' && PermanentCountryID !='' && CountryID != 1 && PermanentCountryID !=1){
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $("#pr_StateDiv").hide();
                     $("#pr_DistrictDiv").hide();
                  
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': 'none', 'background-color': '#e9ecef',
                        'opacity': '1'
                     });
                }
                else if(CountryID!='' && PermanentCountryID !='' && CountryID == 1 && PermanentCountryID !=1){
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                      $("#pr_StateDiv").show();
                     $("#pr_DistrictDiv").show();
                   
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                     });
                }
                else if(CountryID!='' && PermanentCountryID !='' && CountryID != 1 && PermanentCountryID ==1){
                     $("#p_StateDiv").show();
                     $("#p_DistrictDiv").show();
                      $("#pr_StateDiv").hide();
                     $("#pr_DistrictDiv").hide();
                   
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                     });
                }


            }else if(!$('#flexCheckDefaultReg').is(":checked")){
                 if(CountryID!='' && PermanentCountryID!='' && CountryID == 1 && PermanentCountryID == 1){

                        $("#p_StateDiv").show();
                        $("#p_DistrictDiv").show();
                        // $('#p_CountryID').val(CountryID).attr("selected","selected");
                        // var statetxt = $('#pr_StateUTID option:selected').text();
                        // $('#p_StateUTID').html("<option value='" + StateUTID + "'>" + statetxt + "</option>");
                        // $('#p_StateUTID option[value=' + StateUTID + ']').attr("selected", "selected");
                        // var districttxt = $('#pr_DistrictID option:selected').text();
                        // $('#p_DistrictID').html("<option value='" + DistrictID + "'>" + districttxt + "</option>");
                        // $('#p_DistrictID option[value=' + DistrictID + ']').attr("selected", "selected");
                        // $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').prop('readonly', true);
                        // $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_StateUTID,#p_DistrictID,#p_PinCode').css({
                        // 'pointer-events': 'none', 'background-color': '#e9ecef',
                        // 'opacity': '1'
                        // });

                }else if(CountryID!='' && PermanentCountryID !='' && CountryID != 1 && PermanentCountryID !=1){
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $("#pr_StateDiv").hide();
                     $("#pr_DistrictDiv").hide();
                     //$('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                     });
                }
                else if(CountryID!='' && PermanentCountryID !='' && CountryID == 1 && PermanentCountryID !=1){
                     $("#p_StateDiv").hide();
                     $("#p_DistrictDiv").hide();
                     $("#pr_StateDiv").show();
                     $("#pr_DistrictDiv").show();
                   
                    // $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                     });
                }
                else if(CountryID!='' && PermanentCountryID !='' && CountryID != 1 && PermanentCountryID ==1){
                     $("#p_StateDiv").show();
                     $("#p_DistrictDiv").show();
                    
                     $("#pr_StateDiv").hide();
                     $("#pr_DistrictDiv").hide();
                    
                    // $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').prop('readonly', true);
                     $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_CountryID,#p_CountryID,#p_PinCode').css({
                    'pointer-events': '', 'background-color': '',
                    'opacity': ''
                     });
                }
                

            }
         
          }else{
            
            $('#flexCheckDefaultReg').prop('checked', false);
          }

        //    $("#pr_CountryID").change(function() {
        //     var pr_CountryID = $(this).val();
        //     $("#p_DistrictID").empty();
        //     $("#p_DistrictID").html('<option value="">--Select--</option>');
        //     if (pr_CountryID != '') {
        //         $.ajax({
        //             type: "POST",
        //             url: "getcountrycode",
        //             data:{CountryValue:pr_CountryID},
        //             async:false,
        //              beforeSend: function() {
        //                 SimpleLoading.start();
        //               },
        //             success: function(response) {
        //                  var Data = $.parseJSON(response);
        //                  $( "select#CountryCode" ).html( Data.response );
                       
        //                 SimpleLoading.stop();
        //             },
        //             failure: function(response) {
        //                 console.log(response);
        //                  SimpleLoading.stop();
        //             },
        //             error: function(response) {
        //                 console.log(response);
        //                  SimpleLoading.stop();
        //             },
        //         });

        //     } else {
        //          $("#CountryCode").empty();
        //          $("#CountryCode").html('<option value="">--Select--</option>'); 
        //     }

        // })
});