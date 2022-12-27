<template>
  <div class="min-h-[400px] w-[500px] bg-white rounded-lg">
    <h2 class="text-center mt-[20px] text-[30px]">Login</h2>
    <div class="max-w-[400px] mt-[30px] mr-auto">
      <el-form
        ref="ruleFormRef"
        :model="form"
        status-icon
        :rules="rules"
        label-width="120px"
        size="large"
        class="p-[15px]"
      >
        <el-form-item class="pb-[20px] text-[30px]" label="Email" prop="email">
          <el-input v-model="form.email" type="email" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-checkbox
            v-model="form.remember"
            label="Remember me"
            name="type"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="max-[360px]:mb-[10px]"
            type="primary"
            @click="submitForm(ruleFormRef)"
            >Submit</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item >
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter, useRoute } from "vue-router";
const form = ref({
  email: "",
  password: "",
  remember: false,
});



const router = useRouter();
const route = useRoute();


const ruleFormRef = ref<FormInstance>();

const rules = ref<FormRules>({
  email: [
    {
      required: true,
      message: "Please input email address",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Please input correct email address",
      trigger: ["blur", "change"],
    },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
    {
      min: 6,
      message: "Length should be at least 6 characters",
      trigger: "blur",
    },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      console.log(form.value);
      router.push('dashboard');
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
