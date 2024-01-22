/**
 /src/lib/types/UserData.ts
 UserData.ts
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

export interface UserData {
	name: {
		first: string;
		last: string;
	};
	age: number | undefined;
	interests: string[];
	avatarImg?: string;
	agentName: string;
}
