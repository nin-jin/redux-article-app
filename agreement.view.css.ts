namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $my_agreement, {
		
		margin: 'auto',
		padding: $mol_gap.block,
		maxWidth: rem(40),
		flex: {
			direction: 'column',
		},
		justifyContent: 'center',
		
		Title: {
			padding: $mol_gap.block,
			font: {
				weight: 'bolder',
			},
		},
		
		License: {
			padding: $mol_gap.block,
		},
		
		Form: {
			justifyContent: 'space-between',
		},
		
	} )
	
}
