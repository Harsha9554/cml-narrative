/**
 /src/lib/types/NavigationDirection.ts
 NavigationDirection.ts
 cml-narrative
 
 Created by Ian Thompson on January 9th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

/**
 * Enum defining the acceptable navigation directions a user can take through a script/scene
 */
export enum NavigationDirection {
	forward,
	backward
}

/**
 * Defines the state at which the home screen is at.
 */
export enum HomeScreenStates {
	loading,
	home,
	login,
	signUp
}
