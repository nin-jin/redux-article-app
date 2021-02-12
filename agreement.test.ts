namespace $.$$ {
	$mol_test({
		
		'Enable submit ony when agree'( $ ) {
			
			const app = new $my_agreement
			app.$ = $
			$mol_assert_not( app.Submit().enabled() )
			
			app.Agree().click()
			$mol_assert_ok( app.Submit().enabled() )
			
			app.Agree().click()
			$mol_assert_not( app.Submit().enabled() )
			
		}
		
	})
}
