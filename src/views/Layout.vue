<template>
    <div class="Layout">
        这是新组件
        <el-row>
            <el-col :span="24">这是{{title}}</el-col>
        </el-row>
        <el-row>
            <el-col :span="12">左边</el-col>
            <el-col :span="12">右边</el-col>
        </el-row>
        <el-row :gutter="10">
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
            <el-button type="primary" class="el-icon-success"></el-button>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-radio-group v-model="radio"  @change="radioChange">
                    <el-radio v-for="city in cityList"  :label="city.key" :key="city.key">{{city.city}}</el-radio>
                    <!-- <el-radio  label="山东" value="sd">山东</el-radio>
                    <el-radio  label="河南" value="hn">河南</el-radio> -->
                </el-radio-group>
                <el-radio-group @change="radioChange" v-model="buttonModel">
                    <el-radio-button label="按钮1" value="1"></el-radio-button>
                    <el-radio-button label="按钮2" value="2"></el-radio-button>
                    <el-radio-button label="按钮3" value="3"></el-radio-button>
                </el-radio-group>
                <el-checkbox-group v-model="checkboxModel" @change="checkboxChange">
                    <el-checkbox v-for="city in cityList" :label="city.key" :key="city.key" @change="checkboxChange">{{city.city}}</el-checkbox>
                </el-checkbox-group>
                <!-- <el-checkbox-group v-model="checkboxModel" text-color="blue" fill="#ff6600"  @change="checkboxChange">
                    <el-checkbox-button v-for="city in cityList" :label="city.city" :key="city.key" true-lable="111" false-lable="222"
                      @change="checkboxChange"></el-checkbox-button>
                </el-checkbox-group> -->
                <el-input-number v-model="inputNumber" @change="inputChange" :min="1" :max="10" label="label"></el-input-number>
                <el-select
                v-model="selectModel"
                allow-create
                filterable
                placeholder="请选择文章标签"
                @change="selectChange">
                    <el-option  v-for="city in cityList" :value="city.key" :label="city.city" :key="city.key"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <!-- <el-container>
            <el-header>顶部
                <i class="el-icon-success"></i>
            </el-header>
            <el-aside width="200px">侧边栏</el-aside>
            <el-main>主体部分</el-main>
            <el-footer>底部</el-footer>
        </el-container> -->
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data() {
            return {
                title: 'layout组件',
                radio: '山东',
                buttonModel:'按钮1',
                inputNumber:1,
                checkboxModel:[],
                selectModel:'',
                cityList:[
                    {
                        city: '北京',
                        key: 'bj'
                    },
                    {
                        city: '上海',
                        key: 'sh'
                    },
                    {
                        city: '南京',
                        key: 'nj'
                    }
                ]
            }
        },
        methods:{
            radioChange(value){
                console.log(value)
                alert(value)
            },
            checkboxChange(value){
                alert(value)
            },
            inputChange(value){
                // alert(value)
            },
            selectChange(value){
                alert(value)
            }
        }
    }
</script>

<style lang="" scoped>
    /* .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    } */
</style>