const levels = {
	"0": {
		"name": "Red",
		"color": "#FD6167",
		"levels": {
			"0": {
				"name": "Beginning",
				"controlsBinaryId": 513,
				"columns": 5,
				"rows": 1,
				"path": "r r r r r",
				"angle": 0.5,
				"elements": "a n s n f",
				"f1Len": 3,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					2,
					0
				]
			},
			"1": {
				"name": "Angle",
				"controlsBinaryId": 531,
				"columns": 4,
				"rows": 4,
				"path": "r r r g n n n r n n n r n n n r",
				"angle": 0.5,
				"elements": "a n n s n n n n n n n n n n n f",
				"f1Len": 3,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"2": {
				"name": "Coil",
				"controlsBinaryId": 549,
				"columns": 6,
				"rows": 5,
				"path": "b r r r r b r n n n n r r n r b n r r n n r n r b r r b n r",
				"angle": 0,
				"elements": "s n n n n s n n n n n n n n f s n n n n n n n n s n n s n a",
				"f1Len": 3,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"3": {
				"name": "Cross",
				"controlsBinaryId": 567,
				"columns": 7,
				"rows": 7,
				"path": "n n n r n n n n n n r n n n n n n r n n n r r r g r r b n n n r n n n n n n r n n n n n n b n n n",
				"angle": 0.5,
				"elements": "n n n f n n n n n n n n n n n n n n n n n a n n n n n s n n n n n n n n n n n n n n n n n s n n n",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"4": {
				"name": "Lightning",
				"controlsBinaryId": 1591,
				"columns": 3,
				"rows": 5,
				"path": "n n r n n r g r b r n n r n n",
				"angle": 1,
				"elements": "n n a n n n n s n n n n f n n",
				"f1Len": 3,
				"f2Len": 2,
				"minSolutionFunctionsLengths": [
					3,
					2
				]
			},
			"5": {
				"name": "Colorize",
				"controlsBinaryId": 631,
				"columns": 5,
				"rows": 4,
				"path": "n n r n n n n r n n n n r n n b r g r r",
				"angle": 1,
				"elements": "n n a n n n n n n n n n n n n s n n n f",
				"f1Len": 6,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"6": {
				"name": "Roundtrip",
				"controlsBinaryId": 615,
				"columns": 7,
				"rows": 1,
				"path": "b r r b r r r",
				"angle": 0.5,
				"elements": "s a n n n n f",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					2,
					0
				]
			},
			"7": {
				"name": "Lollipop",
				"controlsBinaryId": 823,
				"columns": 7,
				"rows": 12,
				"path": "n n n r n n n n n n r n n n n n n r n n n n n n r n n n n n n r n n n b r r g r r b r n n r n n r r n n r n n r r n n g r n r r n n n n n r r n n n n n r b r r r r r b",
				"angle": 1,
				"elements": "n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n s n n n n n n n n n n n n n n n n n n f n n n n n n n n n n n n n n n n s n n n n n s",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"8": {
				"name": "One",
				"controlsBinaryId": 567,
				"columns": 7,
				"rows": 8,
				"path": "r r r g r r b n n n g n n n n n n r n n n n n n r n n n r r g g n n n n n n r n n n n n n r n n n n n n b n n n",
				"angle": 0.5,
				"elements": "f n n n n n s n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n n n n n n n s n n n",
				"f1Len": 6,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"9": {
				"name": "Aztec",
				"controlsBinaryId": 823,
				"columns": 9,
				"rows": 9,
				"path": "b r r r r r r r b r n n n n n n n r r n b r r r b n r r n r n n n r n r b r g r r n r n r r n r n n n r n r r n b r r r b n r r n n n n n n n r b r r r r r r r b",
				"angle": 0,
				"elements": "s n n n n n n n s n n n n n n n n n n n s n n n s n n a n n n n n n n n n n n n f n n n n n n n n n n n n n n n s n n n s n n n n n n n n n n n s n n n n n n n s",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"10": {
				"name": "8i",
				"controlsBinaryId": 597,
				"columns": 5,
				"rows": 8,
				"path": "g r r r g r n n n r r n n n r r n n n r g r r r g r n n n r r n n n r g r r r g",
				"angle": 1,
				"elements": "s n n n s a n n n n n n n n n n n n n n s n n n s n n n n f n n n n n s n n n s",
				"f1Len": 4,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"11": {
				"name": "Epsilon",
				"controlsBinaryId": 565,
				"columns": 4,
				"rows": 7,
				"path": "b r r r r n n n r n n n b r r g r n n n r n n n b r r r",
				"angle": 1.5,
				"elements": "n n n a n n n n n n n n n n n s n n n n n n n n n n n f",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"12": {
				"name": "Shuttle run",
				"controlsBinaryId": 813,
				"columns": 10,
				"rows": 1,
				"path": "r r r r r b r r r r",
				"angle": 0.5,
				"elements": "f n n n a n n n n s",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"13": {
				"name": "Pyramid",
				"controlsBinaryId": 1727,
				"columns": 7,
				"rows": 7,
				"path": "b r r r r r b r b r r r b r r r b r b r r r r r b r r r r r b r b r r r b r r r b r b r r r r r b",
				"angle": 0.5,
				"elements": "a n n n n n s n s n n n s n n n s n s n n n n n f n n n n n s n s n n n s n n n s n s n n n n n s",
				"f1Len": 5,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"14": {
				"name": "Snake",
				"controlsBinaryId": 567,
				"columns": 3,
				"rows": 7,
				"path": "r r g n n r b r g r n n b r g n n r r r g",
				"angle": 0.5,
				"elements": "a n s n n n s n s n n n s n s n n n f n s",
				"f1Len": 4,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"15": {
				"name": "Bug",
				"controlsBinaryId": 1591,
				"columns": 9,
				"rows": 7,
				"path": "r n n n n n n n r r n n n n n n n r g r b r r r g r g n n r n n n r n n n n r n n n r n n n n r n n n r n n n n b r r r b n n",
				"angle": 1,
				"elements": "a n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n",
				"f1Len": 5,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					4,
					3
				]
			},
			"16": {
				"name": "Hype",
				"controlsBinaryId": 1591,
				"columns": 6,
				"rows": 7,
				"path": "r n n n n r r n n n n r r n n n n r g r r r r g r n n n n r r n n n n r b n n n n b",
				"angle": 1,
				"elements": "a n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n s",
				"f1Len": 5,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"17": {
				"name": "Opacus",
				"controlsBinaryId": 1855,
				"columns": 6,
				"rows": 7,
				"path": "b r r r r g r n n n n r r n n n n g r n n n n r r n n n n r r n n n n r b r r r r b",
				"angle": 0.5,
				"elements": "n n a n n n s n n n n s n n n n n n n n n n n f n n n n n n s n n n n s n n n n n n",
				"f1Len": 4,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					2
				]
			},
			"18": {
				"name": "Net",
				"controlsBinaryId": 759,
				"columns": 12,
				"rows": 12,
				"path": "g r r r r r r r r r g n r n n n n n n n n n r n r n g r r r r r r r g n r n r n n n n n n n r n r n r n g r r r g n r n r n r n r n n n r n r n r n r n r n n n r n r n r n r n r n n n r n r n g r g r g r r r b r b g n n n n n n n n n n r n n n n n n n n n n n r n n n n n n n n n n n r n",
				"angle": 1,
				"elements": "n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f n",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"19": {
				"name": "Bow",
				"controlsBinaryId": 627,
				"columns": 6,
				"rows": 6,
				"path": "b b b b b g r r r r b b r r r b r b r r b r r b r b r r r b b r r r r b",
				"angle": 1,
				"elements": "f n n n n a n n n n s n n n n s n n n n s n n n n s n n n n s n n n n n",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			}
		}
	},
	"1": {
		"name": "Green",
		"color": "#48ED67",
		"levels": {
			"0": {
				"name": "Recursion",
				"controlsBinaryId": 565,
				"columns": 8,
				"rows": 8,
				"path": "n n n n n n n b n n n n n n n b n n n n n n n b n n n n n n n b n n n n n n n b n n n n n n n b n n n n n n n b g g g g g g g b",
				"angle": 0.5,
				"elements": "n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n s",
				"f1Len": 4,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"1": {
				"name": "F for flex",
				"controlsBinaryId": 1565,
				"columns": 4,
				"rows": 7,
				"path": "g n n n g n n n g n n n r g g r g n n n g n n n r g g r",
				"angle": 1,
				"elements": "a n n n n n n n n n n n n n n s n n n n n n n n n n n f",
				"f1Len": 4,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"2": {
				"name": "Ultra cross",
				"controlsBinaryId": 631,
				"columns": 9,
				"rows": 9,
				"path": "n n n n g n n n n n n n n g n n n n n n n n g n n n n n n n n g n n n n g g g g b g g g g n n n n g n n n n n n n n g n n n n n n n n g n n n n n n n n g n n n n",
				"angle": 1.5,
				"elements": "n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n a n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n",
				"f1Len": 6,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"3": {
				"name": "Left turn",
				"controlsBinaryId": 1571,
				"columns": 7,
				"rows": 4,
				"path": "g g g b g g g n n n g n n n n n n g n n n n n n b n n n",
				"angle": 0.5,
				"elements": "a n n n n n f n n n n n n n n n n n n n n n n n s n n n",
				"f1Len": 4,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					2,
					0
				]
			},
			"4": {
				"name": "Fallen ladder",
				"controlsBinaryId": 751,
				"columns": 10,
				"rows": 6,
				"path": "r g g r g g b g g b g n n g n n g n n g g n n g n n g n n g g n n g n n g n n g g n n g n n g n n g r g g r g g b g g b",
				"angle": 0.5,
				"elements": "n n n n n n n f n n n n n n n n n n n n s n n s n n s n n s s n n s n n s n n s n n n n n n n n n n n n n n a n n n n n",
				"f1Len": 6,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					5,
					0
				]
			},
			"5": {
				"name": "Epic sword",
				"controlsBinaryId": 543,
				"columns": 5,
				"rows": 11,
				"path": "n n r n n n n g n n n n g n n r g b g r n n g n n n n g n n n n g n n n n g n n n n g n n n n g n n n n g n n",
				"angle": 0,
				"elements": "n n s n n n n n n n n n n n n s n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"6": {
				"name": "Starfall",
				"controlsBinaryId": 1591,
				"columns": 7,
				"rows": 7,
				"path": "g g g g g g b g g g g g b g g g g g b g g g g g g g g g g g g b g g g g g b g g g g g b g g g g g",
				"angle": 1,
				"elements": "n n n n n n s n n n n n s n n n n n s n n n n n a n n n n n n s n n n f n s n n n n n s n n n n n",
				"f1Len": 3,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"7": {
				"name": "Stupid ray",
				"controlsBinaryId": 943,
				"columns": 9,
				"rows": 10,
				"path": "r g g g r g g g b g n n n g n n n g g n n n g n n n g g n n n g n n n g r g g g r g g g b n n n n g n n n n n n n n g n n n n n n n n b g r n n n n n n n n g n n n n n n n n g n n",
				"angle": 1,
				"elements": "s n n n a n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f n n",
				"f1Len": 6,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					5,
					0
				]
			},
			"8": {
				"name": "Pool filling",
				"controlsBinaryId": 1831,
				"columns": 7,
				"rows": 7,
				"path": "g g g g g g g g g g g g g g g g g g g g g g g g b g g g g g g g g g g g g g g g g g g g g g g g g",
				"angle": 1,
				"elements": "s s s s s s s s n n n n n s s n n n n n s s n n a n n s s n n n n n s s n n n n n s s s s s s s f",
				"f1Len": 5,
				"f2Len": 3,
				"minSolutionFunctionsLengths": [
					3,
					3
				]
			},
			"9": {
				"name": "Branch",
				"controlsBinaryId": 1551,
				"columns": 5,
				"rows": 7,
				"path": "g n n n n g n n n n r r n n n n g n n n n r g g r n n n n g n n n n g",
				"angle": 1,
				"elements": "a n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n f",
				"f1Len": 4,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					4,
					4
				]
			},
			"10": {
				"name": "Wild west",
				"controlsBinaryId": 551,
				"columns": 7,
				"rows": 8,
				"path": "n n n b g b n b g g b n g n g n n g n g n g n n g n g n n n n g n b b g n n g n n g g n n b g g b b g g b n n n",
				"angle": 1,
				"elements": "n n n s n s n n n n n n n n n n n n n n n f n n n n n n n n n n n n s a n n n n n n n n n n n n s n n n n n n n",
				"f1Len": 5,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"11": {
				"name": "Casket",
				"controlsBinaryId": 1583,
				"columns": 11,
				"rows": 9,
				"path": "g n n n n n n n n n g g n n n n n n n n n g b g g r b g b r g g b g n n n n n n n n n g g n n n n b n n n n g g n n n n r n n n n g b g g g n g n g r g b n n n r n g n g n n n n n n b g b g b n n n",
				"angle": 1,
				"elements": "f n n n n n n n n n a n n n n n n n n n n n n n n n s n s n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n",
				"f1Len": 4,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					4,
					3
				]
			},
			"12": {
				"name": "Rotated chair",
				"controlsBinaryId": 1583,
				"columns": 7,
				"rows": 8,
				"path": "g b g g b n n g n n n g n n r g b n b g r n n g n n n g b g r n n n g g n n n n n g g n n n n n g b g g g g g b",
				"angle": 1,
				"elements": "f n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n s",
				"f1Len": 5,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					2,
					2
				]
			},
			"13": {
				"name": "Rocketman",
				"controlsBinaryId": 1839,
				"columns": 15,
				"rows": 8,
				"path": "n n r g g r n n n n n n n n n n n g n n g n n g n n r g g r r b g b g r n n g n n g n n g g n b n n n n n g n n g n n g g n g n n g n n b n n g n n g g n r g g g b g r g b r g g r b n n n n g n n n n n n n n n r g g g b r n n n n n n n n n",
				"angle": 1,
				"elements": "n n s n n s n n n n n n n n n n n n n n n n n a n n s n n s s n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n s n n n n s n n n n n n n n n",
				"f1Len": 5,
				"f2Len": 2,
				"minSolutionFunctionsLengths": [
					3,
					2
				]
			},
			"14": {
				"name": "Eco-friendly",
				"controlsBinaryId": 1583,
				"columns": 3,
				"rows": 11,
				"path": "n g n n g n g r g g b g n g n n g n g r g g b g n g n g r g g b g",
				"angle": 1,
				"elements": "n a n n n n s n s s n s n n n n n n s n s s n s n n n f n s s n s",
				"f1Len": 4,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"15": {
				"name": "Python",
				"controlsBinaryId": 1983,
				"columns": 9,
				"rows": 9,
				"path": "n n n n g n n n n n n n n g n n n n n n n n g n n n n n n n n b n n n n r g g b r b g g r n n n n g n n n n n n n n g n n n n n n n n b n n n n n n n n g g g g g",
				"angle": 1,
				"elements": "n n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f",
				"f1Len": 5,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					3,
					2
				]
			},
			"16": {
				"name": "Cobra",
				"controlsBinaryId": 1709,
				"columns": 9,
				"rows": 9,
				"path": "r g g g b g g g g g n n n r n n n n r g g g r g g g g n n n n r n n n n n n n n r n n n n n n n n r n n n n r g g g r g g g r g n n n r n n n g r g g g b g g g r",
				"angle": 1.5,
				"elements": "n n n n n n n n a n n n n n n n n n n n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n s n n n n n n n n n s n n n n n n n s",
				"f1Len": 5,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					4,
					4
				]
			},
			"17": {
				"name": "Binary tree",
				"controlsBinaryId": 1855,
				"columns": 12,
				"rows": 14,
				"path": "n n n n n n n n n n n r n n n n n n n n n n n g n n n n n n n n n n n b r g b g b g g g g g b g n n n b n n n n n n n b n n n g n n r n n n n g n n n b n n b n n n n g n n n g b b g b r n n g n n n b n n n n n n n b n n n g n r g b g b g g n n n b n n n n g n n b n n n g b g r n g n n g n n n b n n n n g n n g n n n r n n n n n n n n",
				"angle": 0,
				"elements": "n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n f n n a n n n s n n n n n n n n",
				"f1Len": 5,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					3,
					2
				]
			},
			"18": {
				"name": "Viper",
				"controlsBinaryId": 1919,
				"columns": 9,
				"rows": 13,
				"path": "n n r g g g g g r n n g n n n n n g n n r g b n n n g n n n n g n n n n n n n n g g g g g n n n n r n n n n n n n n r n n n n n n n n r n n n n r g g g b n n n n g n n n g n n n n g n n n b g r n n g n n n n n g n n r g g g g g r n n",
				"angle": 0,
				"elements": "n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n s n n n n n s n n",
				"f1Len": 6,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					5,
					3
				]
			},
			"19": {
				"name": "Masterpiece",
				"controlsBinaryId": 1599,
				"columns": 12,
				"rows": 7,
				"path": "n n n n n b n n n b n n n n n n n g n n n g n n n n n n n g n n n g n n g g g g g b g r g b g r n n n n n n n g n n n g n n n n n n n g n n n g n n n n n n n r g g g g",
				"angle": 0.5,
				"elements": "n n n n n s n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n f",
				"f1Len": 6,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					3
				]
			}
		}
	},
	"2": {
		"name": "Blue",
		"color": "#1DC0FC",
		"levels": {
			"0": {
				"name": "Ficircel",
				"controlsBinaryId": 1547,
				"columns": 15,
				"rows": 13,
				"path": "b b b b b b b b b b b b b b b b b b b b b b r b b b b b b b b b b b b b r r r b b b b b b b b b b b r r r r r b b b b b b b b b r r r r r r r b b b b b b b r r r r r r r r r b b b b b r r r r r r r r r r r b b b r r r r r r r r r r r r r b b r r r r r r r r r r r r r b b r r r r r r r r r r r r r b b b r r r r r b r r r r r b b b b b r r r b b b r r r b b b b b b b b b b b b b b b b b b",
				"angle": 1,
				"elements": "n n n n n n n f n n n n n n n n n n n n n n s a n n n n n n n n n n n n s n s n n n n n n n n n n n s n n n s n n n n n n n n n s n n n n n s n n n n n n n s n n n n n n n s n n n n n s n n n n n n n n n s n n n s n n n n n n n n n n n s n n s n n n n n n n n n n n s n n s n n n n n s n n n n n s n n n s n n n s n s n n n s n n n n n s s s n n n s s s n n n n n n n n n n n n n n n n n n",
				"f1Len": 4,
				"f2Len": 3,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"1": {
				"name": "Suracte",
				"controlsBinaryId": 559,
				"columns": 5,
				"rows": 9,
				"path": "r b b b r b n n n b b n n n b b n n n b r b b r r b n n n n b n n n n b n n n n r b b b b",
				"angle": 1.5,
				"elements": "s n n n s n n n n n n n n n n n n n n n s n n a n n n n n n n n n n n n n n n n n n n n f",
				"f1Len": 7,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"2": {
				"name": "Surpude",
				"controlsBinaryId": 1695,
				"columns": 5,
				"rows": 9,
				"path": "b b b b r n n n n b n n n n b n n n n b r b b b b b n n n b b n n n b b n n n b r b b b r",
				"angle": 1,
				"elements": "f n n n s n n n n n n n n n n n n n n a s n n n n n n n n n n n n n n n n n n n s n n n s",
				"f1Len": 6,
				"f2Len": 3,
				"minSolutionFunctionsLengths": [
					4,
					3
				]
			},
			"3": {
				"name": "Libeow",
				"controlsBinaryId": 1759,
				"columns": 5,
				"rows": 9,
				"path": "r b n b r b n n n b b n n n b b n n n b g b b b r b n n n b b n n n b b n n n b g b b b g",
				"angle": 0.5,
				"elements": "n f n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n s",
				"f1Len": 6,
				"f2Len": 2,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"4": {
				"name": "Skirviliner",
				"controlsBinaryId": 1575,
				"columns": 9,
				"rows": 9,
				"path": "b b r r r r r b b b b b b r b b b b b b b b r b b b b b b b b r b b b b b b b b r b b b b b b b r b r b b b b b r b b b r b b b r b b b b b r b r b b b b b b b r",
				"angle": 1.5,
				"elements": "n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f n n n n n n n s s s n n n n n s s s s s n n n s s s s s s s a",
				"f1Len": 7,
				"f2Len": 7,
				"minSolutionFunctionsLengths": [
					3,
					0
				]
			},
			"5": {
				"name": "Gapedria",
				"controlsBinaryId": 1559,
				"columns": 7,
				"rows": 5,
				"path": "g g g g g g g b b b b b b b b b b b b b b b b b b b b b g g g g g g g",
				"angle": 1,
				"elements": "a s s s s s s n n n n n n n n n n n n n n n n n n n n n s s s s s s f",
				"f1Len": 6,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					2
				]
			},
			"6": {
				"name": "Audrid",
				"controlsBinaryId": 1647,
				"columns": 7,
				"rows": 7,
				"path": "r r r r r r r r b b b b b r r b b b b b r r b b b b b r r b b b b b r r b b b b b r r r r r r r r",
				"angle": 1.5,
				"elements": "n n n n n n n n s s s s a n n s s s s s n n s s f s s n n s s s s s n n s s s s s n n n n n n n n",
				"f1Len": 4,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					2,
					4
				]
			},
			"7": {
				"name": "Hoolhono",
				"controlsBinaryId": 1695,
				"columns": 9,
				"rows": 11,
				"path": "r b b b r n n n n b n n n b n n n n b n n n b n n n n b n n n b n n n n r b b b r n n n n n n n n b n n n n n n n n r b b g g n n n n b n n n g n n n n b n n n b n n n n b n n n b n n n n g b b b b",
				"angle": 0.5,
				"elements": "s n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f",
				"f1Len": 6,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					5,
					3
				]
			},
			"8": {
				"name": "Seizatot",
				"controlsBinaryId": 1595,
				"columns": 12,
				"rows": 11,
				"path": "n n n n n n g b b b b r n n n n n n b n n n n b n n n n n n b n n n n b b b r g b b r n n n n b n n n b n n n n n n n b n n n b n n n n n n n b n n n b n n n n n n n b n n n b n n n n n n n b n n n b n n n n n n n b n n n g n n n n n n n b n n n b b b b r b b b g",
				"angle": 0.5,
				"elements": "n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n f n n n s n n n n",
				"f1Len": 4,
				"f2Len": 3,
				"minSolutionFunctionsLengths": [
					3,
					2
				]
			},
			"9": {
				"name": "Prodness",
				"controlsBinaryId": 575,
				"columns": 10,
				"rows": 10,
				"path": "r b b b b b b b b r b n n n n n n n n b r b b b b b r n n b b n n n n n b n n b b n n r b b r n n b b n n b n n n n n b b n n r g n n n n b b n n n r g n n n b b n n n n r g n n b b n n n n n r b b r",
				"angle": 0,
				"elements": "n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s s n n n n n n n n n s s n n n n n n n n n s s n n n a n n n n n s f n n",
				"f1Len": 7,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					5,
					0
				]
			},
			"10": {
				"name": "Stramelos",
				"controlsBinaryId": 1591,
				"columns": 11,
				"rows": 10,
				"path": "n n n n n n g b b b g n n n n n n b n n n b n n n n n n b n n n b b b b b b b g n n n b n n n b n n n n n n b n n n b n n n n n n b n n n g b b b b b g b n n n b n n b n n n b n n n b n n b n n n b n n n g n n b b b b g",
				"angle": 0.5,
				"elements": "n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n s n n f n n n n",
				"f1Len": 4,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					3
				]
			},
			"11": {
				"name": "Diffiatate",
				"controlsBinaryId": 1583,
				"columns": 13,
				"rows": 7,
				"path": "n n n n n n n n n r b r b n n n n n n n n n b n n b n n n n n n n n b b n n r n n n n n n n b b n n n b b b b b b b r b n n n n b n n n n n n n b n n b b r n n n n n n n b r b b n n",
				"angle": 0.5,
				"elements": "n n n n n n n n n s n n s n n n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n n n n n n n n n n n n n n s n s n n n n n n n s n n s n n",
				"f1Len": 6,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					4,
					4
				]
			},
			"12": {
				"name": "Ablynx",
				"controlsBinaryId": 1575,
				"columns": 6,
				"rows": 9,
				"path": "r b b b b r r b b b b r r b b b b r r b b b b r r b b b b r r b b b b r r b b b b r r b b b b r r b b b b r",
				"angle": 0.5,
				"elements": "a n n n n s s n n n n s s n n n n s s n n n n s s n n n n s s n n n n s s n n n n s s n n n n s s n n n n f",
				"f1Len": 5,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					4,
					2
				]
			},
			"13": {
				"name": "Clomecry",
				"controlsBinaryId": 1725,
				"columns": 5,
				"rows": 14,
				"path": "n n b g g n n n n g n n g b g n n b n g n n b n b n n b n b n n b n b n n b n b n n b n b n n b n b n n g b b n n n n b n n n n b b b b b r",
				"angle": 0.5,
				"elements": "n n f n n n n n n n n n n n n n n s n n n n n n n n n s n n n n n n n n n s n n n n n n n n n s n n n n n n n n n n n n n n n n n a n n n n",
				"f1Len": 5,
				"f2Len": 5,
				"minSolutionFunctionsLengths": [
					4,
					4
				]
			},
			"14": {
				"name": "Explow",
				"controlsBinaryId": 1911,
				"columns": 9,
				"rows": 11,
				"path": "n n r b g b g n n n n b n b n b n n r b b b g b b b b b n b n b n b n n b n b n b n b n n b n b n b n b n n r b b b r n b n n n n b n b n b n n n n r b g b g n n n n n n b n n n n n n n n g b b b b",
				"angle": 1.5,
				"elements": "n n n n n n n n n n n n n n n n n n n n s n n n n n a n n n n n n n n n s n s n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f",
				"f1Len": 6,
				"f2Len": 4,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"15": {
				"name": "Murdronir",
				"controlsBinaryId": 1591,
				"columns": 9,
				"rows": 8,
				"path": "n n n n n n n n g n n n n n n n n g n n n n n n n n r b g g g r b b g b g n n n n g n n r b g r b g r g r b n n n n n r n n n b g r b g b n n n",
				"angle": 0.5,
				"elements": "n n n n n n n n s n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n f n n n n n n n n n a n n n n n n n n",
				"f1Len": 5,
				"f2Len": 2,
				"minSolutionFunctionsLengths": [
					3,
					2
				]
			},
			"16": {
				"name": "Dieboofree",
				"controlsBinaryId": 575,
				"columns": 11,
				"rows": 15,
				"path": "n n r b g b r n n n n n n b n n n b n n n n n n g n n n b n n n n n n b n n n b n n n n n n r b g n b n n n n n n n n b n b n n n n n n n n b n b n n n n n n n n b n b n n n n n n n n b n b n n n n n n r b b b r b g b g n n b n r n b n n n b b r g b g n g b b b b n n n n b n n n n n n n n n n b n n n n n n n n n n g n n n n n n",
				"angle": 0.5,
				"elements": "n n n s n s n n n n n n n s n n n s n n n n n n n n n n n n n n n n n s n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n a n n n n n n n n n f n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n",
				"f1Len": 6,
				"f2Len": 0,
				"minSolutionFunctionsLengths": [
					5,
					0
				]
			},
			"17": {
				"name": "Tridant",
				"controlsBinaryId": 1631,
				"columns": 7,
				"rows": 5,
				"path": "n n n n r b b n n n n b n n b b b b r b g n n n n b n n n n n n g b g",
				"angle": 0.5,
				"elements": "n n n n n n f n n n n n n n a n n n n n s n n n n n n n n n n n n n s",
				"f1Len": 5,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					3
				]
			},
			"18": {
				"name": "Kuber",
				"controlsBinaryId": 1919,
				"columns": 9,
				"rows": 9,
				"path": "n n n n b n n n n n n n n r n n n n n n b r b r b n n n n r n b n r n n b r b b g b b r b n n r n b n r n n n n b r b r b n n n n n n r n n n n n n n n b n n n n",
				"angle": 1,
				"elements": "n n n n s n n n n n n n n n n n n n n n s n n f s n n n n n n n n n n n s n n n a n n n s n n n n n n n n n n n s n n n s n n n n n n n n n n n n n n n s n n n n",
				"f1Len": 7,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					4,
					0
				]
			},
			"19": {
				"name": "Psychotes",
				"controlsBinaryId": 2047,
				"columns": 13,
				"rows": 9,
				"path": "r n n n r n n n b n n n n b n n n b n n n b n n n n b n n n b n n n b n n n n g n n n g n n n g n n n n b g b b b g r g b g b b r b n n n g n n n g n n n n b n n n b n n n b n n n n b n n n b n n n b n n n n b n n n r n n n r n n n n",
				"angle": 1,
				"elements": "s n n n s n n n a n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n s n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n n f n n n s n n n s n n n n",
				"f1Len": 6,
				"f2Len": 6,
				"minSolutionFunctionsLengths": [
					5,
					5
				]
			}
		}
	}
};