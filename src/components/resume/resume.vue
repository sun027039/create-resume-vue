<template>
  	<div class="resume-box" id="resumeBox">
		<div class="left-box">
			<div class="avatar"><img :src="resumeData.avatar"></div>
			<div class="name">
				{{resumeData.name}}
				<p class="position">{{resumeData.position}}</p>
			</div>
			<div class="conection item-box">
				<div class="title">联系方式 Contacts</div>
				<div class="item" v-for="item in resumeData.conection">{{item.name+":"+item.value}}</div>
			</div>
			<div class="skill item-box">
				<div class="title">职业技能 Skills</div>
				<div class="item" v-for="item in resumeData.skillArr">{{item.value}}</div>
			</div>
			<div class="education item-box">
				<div class="title">教育背景 Education</div>
				<div class="item">{{resumeData.school.name+"·"+resumeData.school.education}}<p class="date">{{resumeData.school.date}}</p></div>
			</div>
		</div>
		<div class="right-box">
			<div class="item-box">
				<div class="title">个人介绍 Summary</div>
				<div class="info-box">
					{{resumeData.desc}}
				</div>
			</div>
			<div class="item-box work-experience">
				<div class="title">工作经历 Work Experience</div>
				<div class="info-box">
					<div class="item" v-for="item in resumeData.worksArr">
						<p class="name">{{item.name}}<span class="date">{{item.date}}</span></p>
						<p class="position">{{item.position}}</p>
						<p class="desc">{{item.desc}}</p>
					</div>
				</div>
			</div>
			<div class="item-box projects">
				<div class="title">项目经历 Projects</div>
				<div class="info-box">
					<div class="item" v-for="item in resumeData.projectArr">
						<p class="name">{{item.name}}<span class="date">{{item.date}}</span></p>
						<p class="desc">{{item.desc}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      
    }
  },
  props: {
  	resumeData:{
  		type:Object
  	}
  }
}
</script>
<style scoped lang="scss">
	.resume-box{
		border: 1px solid #eee;
		margin-right: 10px;
		width: 1000px;
		height: 1214px;
		margin: 0 auto;
		position:relative;
		font-size: 14px;
		.title{
			font-size: 18px;
			margin-bottom: 20px;
		}
		.left-box{
			width:300px;
			position:absolute;
			top:0;
			left:0;
			bottom:0;
			background:#E7E5E6;
			.avatar{
				width:100px;
				height:100px;
				border-radius: 50%;
				overflow: hidden;
				margin:40px auto 20px;
				img{
					width:100%;
				}
			}
			.name{
				font-size: 26px;
				padding-bottom: 30px;
				//font-weight: bold;
				.position{
					font-size: 16px;
				}
			}
			.item-box{
				text-align: left;
				padding-left:30px;
				&+.item-box{
					padding-top:30px;
				}
				
				.item{
					padding-left:10px;
				}
			}
			.education{
				.date{
					text-align: right;
					padding-right:30px;
				}
			}
		}
		.right-box{
			padding-left:300px;
			text-align: left;
			padding-top:50px;
			.item-box{
				padding:0 50px;
				&+.item-box{
					padding-top:20px;
				}
			}
			.info-box{
				//padding-left:10px;
			}
		}
		.work-experience,.projects{
			.item{
				&+.item{
					margin-top: 20px;
				}
			}
			.name{
				font-size: 18px;
				padding-bottom:5px;
				.date{
					float: right;
					font-size: 14px;
					color:#666;
				}
			}
			.position{
				font-size: 16px;
				padding-bottom:5px;
			}
		}
	}
	.skill{
		.item{
			padding:5px 0;
		}
	}
</style>
