var msgCheck = {
    msgfield: '',

    init: function (val) {
        this.msgfield = val
    },
    run: function(){
        var self = this;
        if(self.msgfield.name[0] ==0){
            $('.require_name').remove();
        }
        if(self.msgfield.tel[0] ==0){
            $('.require_phone').remove();
        }
        if(self.msgfield.email[0] ==0){
            $('.require_email').remove();
        }
        if(self.msgfield.title[0] ==0){
            $('.require_title').remove();
        }
        if(self.msgfield.content[0] ==0){
            $('.require_content').remove();
        }

        if(self.msgfield.name[1] ==0){
            $('input[name="name"]').parent().remove();
        }
        if(self.msgfield.tel[1] ==0){
            $('input[name="telephone"]').parent().remove();
        }
        if(self.msgfield.email[1] ==0){
            $('input[name="email"]').parent().remove();
        }
        if(self.msgfield.title[1] ==0){
            $('input[name="title"]').parent().remove();
        }
        if(self.msgfield.content[1] ==0){
            $('textarea[name="content"]').parent().remove();
        }


        //切换验证码
        $('#change').click(function(){
            changeImg();
        });

        $('#verify').click(function(){
            changeImg();
        });

        function changeImg(){
            var verifyimg = $("#verify").attr("src");
            if( verifyimg.indexOf('?')>0){
                $("#verify").attr("src", verifyimg+'&random='+Math.random());
            }else{
                $("#verify").attr("src", verifyimg.replace(/\?.*$/,'')+'?'+Math.random());
            }
        }
        //重置
        $('input[name="reset"]').click(function(){

            $('input[name="name"]').val("");
            $('input[name="telephone"]').val("");
            $('input[name="telephone"]').attr('placeholder', '电话不能为空');
            $('input[name="email"]').val("");
            $('input[name="email"]').attr('placeholder', '邮箱不能为空');
            $('input[name="title"]').val("");
            $('textarea[name="content"]').val("");
            $('input[name="verify"]').val("");
        })

        $('textarea[name="content"]').focus(function () {
            $(this).attr('placeholder', '');
        });

        $('#cg').click(function () {
            changeImg();
        });

        //切换验证码
        $('#verify').click(function () {
            changeImg();
        });

        function changeImg() {
            var verifyimg = $("#verify").attr("src");
            if (verifyimg.indexOf('?') > 0) {
                $("#verify").attr("src", verifyimg + '&random=' + Math.random());
            } else {
                $("#verify").attr("src", verifyimg.replace(/\?.*$/, '') + '?' + Math.random());
            }
        }
        $("#message-submit").on("click",function(){
            //验证
            temp_validate = 0;
            if(self.msgfield.title[0] ==1){
                if ($('input[name="title"]').val() == '') {
                    $('input[name="title"]').addClass('validate-on').attr('placeholder', '留言标题不能为空');
                    temp_validate = 1;
                } else {
                    $('input[name="title"]').removeClass('validate-on');
                }
            }
            if(self.msgfield.name[0] ==1){
                if ($('input[name="name"]').val() == '') {
                    $('input[name="name"]').addClass('validate-on').attr('placeholder', '姓名不能为空');temp_validate = 1;
                } else {
                    $('input[name="name"]').removeClass('validate-on');
                }
            }

            var $telephone = $('input[name="telephone"]').val();
            var $reg = /^[0|1]?\d{2}-?\d{8}$/;

            if ($('input[name="telephone"]').val() == '' && self.msgfield.tel[0] ==1) {
                $('input[name="telephone"]').addClass('validate-on').attr('placeholder', '电话不能为空');temp_validate = 1;
            } else if(!$reg.test($telephone) && $('input[name="telephone"]').val() != ''){
                $('input[name="telephone"]').val('');
                $('input[name="telephone"]').addClass('validate-on').attr('placeholder', '电话格式不正确');temp_validate = 1;
            }else {
                $('input[name="telephone"]').removeClass('validate-on');
            }



            var $email = $('input[name="email"]').val();
            // var $reg = /^[\w\.]{1,}@\w+(\.\w+)?\.\w+$/;
            var $reg =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

            if ($('input[name="email"]').val() == ''  && self.msgfield.email[0] ==1) {
                $('input[name="email"]').addClass('validate-on').attr('placeholder', '邮箱不能为空');temp_validate = 1;
            }else if(!$reg.test($email) && $('input[name="email"]').val() != ''){
                $('input[name="email"]').val('');
                $('input[name="email"]').addClass('validate-on').attr('placeholder', '邮箱格式不正确');temp_validate = 1;
            } else {
                $('input[name="email"]').removeClass('validate-on');
            }

            if(self.msgfield.content[0] ==1){
                if ($('textarea[name="content"]').val() == "") {
                    $('textarea[name="content"]').addClass('validate-on').attr('placeholder', '留言内容不能为空');
                    temp_validate = 1;
                } else {
                    $('textarea[name="content"]').removeClass('validate-on');
                }
            }

            if ($('input[name="verify"]').val() == '') {
                $('input[name="verify"]').addClass('validate-on').attr('placeholder', '不能为空');temp_validate = 1;
            } else {
                $('input[name="verify"]').removeClass('validate-on');
            }


            if(temp_validate == 1){
                $('.validate-on:first').focus();
                return false;}


            $('.validate-on').eq(0).focus();

          

            return false;
        });
        
        function validateName() {
            if ($('input[name="name"]').val() == '') {
                $('input[name="name"]').addClass('validate-on').attr('placeholder', '姓名不能为空');
            } else {
                $('input[name="name"]').removeClass('validate-on');
            }
        };

        function phone() {
            if ($('input[name="telephone"]').val() == '') {
                $('input[name="telephone"]').addClass('validate-on').attr('placeholder', '电话不能为空');
            } else {
                $('input[name="telephone"]').removeClass('validate-on');
            }

            var $telephone = $('input[name="telephone"]').val();
            var $reg = /^[0|1]?\d{2}-?\d{8}$/;
            if (!$reg.test($telephone)) {
                $('input[name="telephone"]').addClass('validate-on').attr('placeholder', '电话格式不正确');
            } else {
                $('input[name="telephone"]').removeClass('validate-on');
            }
        }

        function email() {
            if ($('input[name="email"]').val() == '') {
                $('input[name="email"]').addClass('validate-on').attr('placeholder', '邮箱不能为空');
            } else {
                $('input[name="email"]').removeClass('validate-on');
            }

            var $email = $('input[name="email"]').val();
            var $reg = /^[\w\.]{1,}@\w+(\.\w+)?\.\w+$/;
            if (!$reg.test($email)) {
                $('input[name="email"]').addClass('validate-on').attr('placeholder', '邮箱格式不正确');
            } else {
                $('input[name="email"]').removeClass('validate-on');
            }
        }

        function title() {
            if ($('input[name="title"]').val() == '') {
                $('input[name="title"]').addClass('validate-on').attr('placeholder', '留言标题不能为空');
            } else {
                $('input[name="title"]').removeClass('validate-on');
            }
        }

        function textarea() {
            if ($('#textarea ').val() == '') {
                $('#textarea ').addClass('validate-on').attr('placeholder', '内容不能为空');
            } else {
                $('#textarea ').removeClass('validate-on');
            }
        }

        $('#name').on('blur', function () {
            if(self.msgfield.name[0] == 0)return;
            validateName();
            blur();
        });

        $('#telephone').on('blur', function () {
            if(self.msgfield.tel[0] == 0)return;
            phone();
        });

        $('#email').on('blur', function () {
            if(self.msgfield.email[0] == 0)return;
            email();
        });

        $('#title').on('blur', function () {
            if(self.msgfield.title[0] == 0)return;
            title();
        });

        $('#textarea').on('blur', function () {
            if(self.msgfield.content[0] == 0)return;
            textarea();
        });

    }

}