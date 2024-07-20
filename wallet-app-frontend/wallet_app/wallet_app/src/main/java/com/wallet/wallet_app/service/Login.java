package com.wallet.wallet_app.service;

import javax.swing.*;
import java.awt.*;

import static java.awt.AWTEventMulticaster.add;

public class Login {
    JLabel label1,label2,label3,label4;
    JTextField text1,text2,text3,text4;
    JPasswordField password1,password2,password3,password4;
    JButton button1,button2,button3;

    Login(){
//        super("Bank Management System");
        ImageIcon i1=new ImageIcon(getClass().getResource("icon.png"));
        Image i2=i1.getImage().getScaledInstance(100,100,Image.SCALE_SMOOTH);
        ImageIcon i3=new ImageIcon(i2);
        JLabel image=new JLabel(i3);
        image.setBounds(0,0,100,100);
//        add(image);

        ImageIcon i4=new ImageIcon(getClass().getResource("icon.png"));
        Image ii2 =i1.getImage().getScaledInstance(100,100,Image.SCALE_DEFAULT);
        ImageIcon ii3=new ImageIcon(ii2);
        JLabel image4=new JLabel(ii3);
        JLabel iimage = null;
        iimage.setBounds(630,350,100,100);
//        add(iimage);

        label1=new JLabel("Bank Management System");
        label1.setFont(new Font("Times New Roman",Font.BOLD,20));
        label1.setForeground(Color.BLACK);
        label1.setBackground(Color.WHITE);
//        add(label1);

        label2=new JLabel("Bank Management System");
        label2.setFont(new Font("Times New Roman",Font.BOLD,20));
        label2.setForeground(Color.BLACK);
        label2.setBackground(Color.WHITE);
//        add(label2);

        JTextField textField = new JTextField(15);
        text2.setBounds(325,190,230,30);
        text2.setFont(new Font("Arial",Font.BOLD,20));
        add(text2);

    }

    private void add(JTextField text2) {

    }
}

