<template>
	{{ $data | json }}
  <ul>
  	<li v-for='task in list'>
  		{{task.name}}
  	</li>
  </ul>
</template>

<script>
export default {
	data(){
	  	return {
	  		list:[]	
	  	}
	},
	created(){
		this.fetchdata();
	},
	methods:{
		fetchdata(){
			var resource=this.$resource('test.php');
			resource.get({},).then((response) => {
				this.list=JSON.parse(response.body);
			});
		}
	}
}
</script>