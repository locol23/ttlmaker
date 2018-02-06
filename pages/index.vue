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
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">
          <el-form-item label="HostName" prop="hostName">
              <el-input type="text" placeholder="server01" v-model="ruleForm.hostName" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="IP Address" prop="ipAddress">
              <el-input type="text" placeholder="123.456.789.123" v-model="ruleForm.ipAddress"></el-input>
          </el-form-item>
          <el-form-item label="Login User Name" prop="user">
              <el-input type="text" placeholder="user01" v-model="ruleForm.user"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="hostName">
              <el-input type="password" placeholder="password01" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')" class="el-button el-button--primary">Make!</el-button>
          </el-form-item>
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
        <div class="el-upload__text">ファイルをドロップまたは<em>こちらをクリック</em></div>
        <div class="el-upload__tip" slot="tip">500KB以下でお願いします</div>
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
        fileList: [{name: 'servers.csv'}],
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
