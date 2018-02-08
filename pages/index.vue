<template>
  <section class="container">
    <div class="airticle">
      <h1>What's this?</h1>
      <article>
        <p>Make Tera Term Macro(TTL) Service.</p>
      </article>
    </div>

    <div class="contents">
      <div class="item">
        <h1>Make TTL</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50%">
          <el-form-item label="HostName" prop="hostName">
            <el-col :span="11">
              <el-input type="text" placeholder="server01" v-model="ruleForm.hostName" auto-complete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="IP Address" prop="ipAddress">
           <el-col :span="11">
              <el-input type="text" placeholder="123.456.789.123" v-model="ruleForm.ipAddress"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="Login User Name" prop="user">
           <el-col :span="11">
              <el-input type="text" placeholder="user01" v-model="ruleForm.user"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="Password" prop="hostName">
           <el-col :span="11">
              <el-input type="password" placeholder="password01" v-model="ruleForm.password"></el-input>
            </el-col>
          </el-form-item>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')" class="el-button el-button--primary">Make!</el-button>
        </el-form>
      </div>

      <div class="item">
        <h1>Make TTL From Upload File</h1>
        <el-upload
          class="csv-upload"
          drag
          action="http://localhost:3000"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">csv file with a size less than 500kb</div>
          <div class="el-upload__tip" slot="tip">csv file format : [Host Name,IP Address,User Name,Password]</div>
          <div class="el-upload__tip" slot="tip">example : [server01,123.456.789.123,user01,password01]</div>
        </el-upload>

      <!-- <router-link to="{path: '/download', params: ''}" tag="button" class="el-button el-button--primary">Make !</router-link> -->
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        ruleForm: {
          hostName: '',
          ipAddress: '',
          user: '',
          password: '',
        },
        rules: {
          hostName: [
            { required: true, message: 'Input Value', trigger: 'blur' }
          ],
          ipAddress: [
            { required: true, message: 'Input Value', trigger: 'blur' }
          ],
          user: [
            { required: true, message: 'Input Value', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Input Value', trigger: 'blur' }
          ],
        },
        fileList: [],
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/download')
          } else {
            console.log('Error Make TTL!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .contents{
    display: flex;
    flex-direction: row;
  }

  .airticle{
    margin: 60px auto;
  }

  .item{
    flex: 1;
  }
</style>
