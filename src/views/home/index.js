import resume from '../../components/resume/resume.vue'
export default {
  name: 'index',
  data(){
  	return{
  		resumeData:{
  			avatar:"../../../static/1.jpg",
  			name:"名字",
        desc:"",
  			conection:[],
        position:"应聘职位",
        school:{
          name:"",
          date:"",
          education:""
        },
        skillArr:[],
        worksArr:[],
        projectArr:[],
  		}
  	}
  },
  created(){
    let resumeData=localStorage.getItem("resumeData")
    if(resumeData){
      this.resumeData=JSON.parse(resumeData);
    }
  },
  methods:{
    addSkillItem(){
      this.resumeData.skillArr.push({value:""})
    },
    addConectionItem(){
      this.resumeData.conection.push({value:"",name:""})
    },
    addWorkItem(){
      this.resumeData.worksArr.push({date:"",name:"",position:"",desc:""})
    },
    addProjectItem(){
      this.resumeData.projectArr.push({date:"",name:"",desc:""})
    },
    saveResumeData(){
      localStorage.setItem("resumeData",JSON.stringify(this.resumeData));
    }
  },
  components : {
      Resume:resume
  }
}