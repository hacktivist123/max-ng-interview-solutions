/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
const data = input;
	const students = [];
	const ages = [];
	const groups = {};
	const organizedGroups = {};
	const noOfGroups = '';

	//Extract Age
	data.map((student)=>{
		var dob = new Date(student.dob);
		var yob = dob.getFullYear();
		age = 2018 - yob;
		students.push({
			name: student.name,
			age: age,
			dob: student.dob,
			regNo: student.regNo
		});

		ages.push(age);
	});

	//Sort Students by Age
	students.sort((a, b)=>{
		return a.age - b.age;
	});

	//sort members
	const sortedStudentsBucket = [];
	const ageCounter = {};
	const counter = 1 ;

	const minAge = Math.min(...ages);
	const maxAge = Math.max(...ages);

	for(let i=minAge, j=0; i<=(maxAge+5); i+=5){
		students.forEach((student)=>{
			//Check if the student satisfies the condition for age difference being less than 5
			if(Math.abs(i - student.age) <= 5){
				//Check if the student has been sorted
				if(sortedStudentsBucket.indexOf(student.regNo) < 0 ){
					//Check if the group exists 
					if(! groups.hasOwnProperty([counter])){
						i = student.age;
						groups[counter] = {
							members: [],
							sum: 0,
							regNos: [],
							oldest: 0
						}
						groups[counter].members.push(student);
						sortedStudentsBucket.push(student.regNo);

						//Handle metadata
						ageCounter[counter] = [];
						ageCounter[counter].push(student.age)
						groups[counter].sum+=student.age
						const integerRegNo = parseInt(student.regNo);
						groups[counter].regNos.push(integerRegNo);
						groups[counter].oldest = student.age

						//We increment j to indicate a new group being created
						j=j+1;
						organizedGroups['group'+j] = groups[counter]
					}
					else {
						//Check if the bucket is full
						if(groups[counter].members.length !== 3 ){
							groups[counter].members.push(student);
							sortedStudentsBucket.push(student.regNo);	

							//Handle Metadata
							ageCounter[counter].push(student.age)
							groups[counter].sum+=student.age
							const integerRegNo = parseInt(student.regNo);
							groups[counter].regNos.push(integerRegNo);

							const oldest = Math.max(...ageCounter[counter]);
							groups[counter].oldest = oldest;
							groups[counter].regNos.sort((a,b)=>{
								return a-b;
							});

							organizedGroups['group'+j] = groups[counter]
						} 
					}
				}
			}
		});	
		counter++;
	}
	organizedGroups.noOfGroups = j
	return organizedGroups;
}

module.exports = classifier;
