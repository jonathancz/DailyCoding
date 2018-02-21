import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.layout.GridPane;
import javafx.scene.control.Label;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.event.EventHandler;
import javafx.event.ActionEvent;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.event.ActionEvent;
import java.util.Random;

public class CoinFlip extends Application{
	
	ImageView coinImage = new ImageView();
	Image headsImage = new Image("Heads1.png");
	Image tailsImage = new Image("Tails1.png");
	
	//Creating new Label
	Label totalFlips = new Label("Total Flips: ");
	Label heads = new Label("Heads: ");
	Label tails = new Label("Tails: ");
	
	int numTotalFlips = 0;
	int numHeads = 0;
	int numTails = 0;
	
	public static void main(String[] args)
	{
		launch(args);
	}
	
	public void start(Stage primaryStage)
	{	
		//Create the ImageView Control
		coinImage.setFitWidth(200);
		coinImage.setFitHeight(200);
		
		//Create Toss button
		Button tossButton = new Button("Toss");
		//Tie button with action handler
		tossButton.setOnAction(new tossButtonHandler());
		
		//VBox and alignments
		VBox mainVBox = new VBox(10, totalFlips, heads, tails, coinImage, tossButton);
		mainVBox.setAlignment(Pos.CENTER);
		mainVBox.setPadding(new Insets(10));
		
		//Setting up the scene
		Scene scene = new Scene(mainVBox);
		primaryStage.setScene(scene);
		primaryStage.show();
	}
	
	class tossButtonHandler implements EventHandler<ActionEvent>
	{
		public void handle(ActionEvent event)
		{
			Random rand = new Random();
			
			//Generate random number 0 or 1
			int value = rand.nextInt(2); //Generate 0 < 2
			if(value == 0)
			{
				numTotalFlips++;
				numHeads++;
				totalFlips.setText("Total Flips: " + numTotalFlips);
				heads.setText("Heads: " + numHeads);
				coinImage.setImage(headsImage);
			}
			else
			{
				numTotalFlips++;
				numTails++;
				totalFlips.setText("Total Flips: " + numTotalFlips);
				tails.setText("Heads: " + numTails);
				coinImage.setImage(tailsImage);
				
			}
		}
	}
}