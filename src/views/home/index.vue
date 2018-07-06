<template>
	<div>
		<Layout>
            <Content :style="{padding: '10px', minHeight: '280px', background: '#fff'}">
                <Row type="flex">
			        <Col span="18" >
			        	<Resume :resumeData="resumeData"></Resume>
			        </Col>
			        <Col span="6">
			        	<Form :model="resumeData" label-position="right" :label-width="100">
			        		<Card dis-hover>
			        			<p slot="title">基础信息</p>
			        			<FormItem label="照片">
						            <Input v-model="resumeData.avatar"></Input>
						        </FormItem>
						        <FormItem label="名字">
						            <Input v-model="resumeData.name"></Input>
						        </FormItem>
						        <FormItem label="职位">
						            <Input v-model="resumeData.position"></Input>
						        </FormItem>
						        <FormItem label="个人介绍">
						            <Input v-model="resumeData.desc" type="textarea" :autosize="{minRows: 2,maxRows: 3}" placeholder="个人介绍..."></Input>
						        </FormItem>
						        <FormItem label="联系方式" class="more-item-box">
						        	<Row v-for="item in resumeData.conection" class="more-item">
						                <Col span="8">
						                    <Input type="text" v-model="item.name" placeholder="联系名称"></Input>
						                </Col>
						                <Col span="1">--</Col>
						                <Col span="15">
						                    <Input type="text" v-model="item.value" placeholder="联系内容"></Input>
						                </Col>
						            </Row>
						            <Button type="dashed" class="addBtn" long @click="addConectionItem" icon="md-add">添加联系方式</Button>
						        </FormItem>
						        <FormItem label="教育背景" class="more-item-box">
						            <Input v-model="resumeData.school.name" class="more-item" placeholder="毕业院校"></Input>
						            <Input v-model="resumeData.school.date" class="more-item" placeholder="毕业时间"></Input>
						            <Input v-model="resumeData.school.education" class="more-item" placeholder="学历"></Input>
						        </FormItem>
			        		</Card>
					        <Card dis-hover>
					            <p slot="title">技能</p>
					            <FormItem v-for="(item,index) in resumeData.skillArr" :label="'技能'+(index+1)">
						            <Input v-model="item.value"></Input>
						        </FormItem>
						        <Button type="dashed" class="addBtn" long @click="addSkillItem" icon="md-add">添加技能</Button>
					        </Card>
					        <Card dis-hover >
					            <p slot="title">工作经历</p>
					            <FormItem v-for="(item,index) in resumeData.worksArr" :label="'公司'+(index+1)" class="more-item-box">
						            <Input class="more-item" v-model="item.name" placeholder="公司名称"></Input>
						            <Input class="more-item" v-model="item.date" placeholder="在职时间"></Input>
						            <Input class="more-item" v-model="item.position" placeholder="职位"></Input>
						            <Input class="more-item" v-model="item.desc" placeholder="简介"></Input>
						        </FormItem>
						        <Button type="dashed" class="addBtn" long @click="addWorkItem" icon="md-add">添加工作经历</Button>
					        </Card>
					        <Card dis-hover >
					            <p slot="title">项目经历</p>
					            <FormItem v-for="(item,index) in resumeData.projectArr" :label="'项目'+(index+1)" class="more-item-box">
						            <Input class="more-item" v-model="item.name" placeholder="项目名称"></Input>
						            <Input class="more-item" v-model="item.date" placeholder="开发时间"></Input>
						            <Input class="more-item" v-model="item.desc" placeholder="简介"></Input>
						        </FormItem>
						        <Button type="dashed" class="addBtn" long @click="addProjectItem" icon="md-add">添加项目</Button>
					        </Card>
					        <FormItem>
					            <Button type="primary" @click="saveResumeData">保存</Button>
					        </FormItem>
					    </Form>
			        </Col>
			    </Row>
            </Content>
        </Layout>
	</div>
                    
</template>

<script>
  import index from './index.js'
  export default index
</script>
<style scoped lang="scss">
	.ivu-form-item{
		margin-bottom: 10px;
	}
	.addBtn{
		margin-top: 10px;
	}
	.more-item-box{
		.more-item+.more-item{
			margin-top: 5px;
		}
	}
</style>
