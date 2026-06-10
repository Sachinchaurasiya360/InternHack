
/
/
 
D
S
A
 
P
r
a
c
t
i
c
e


e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
T
o
p
i
c
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
o
r
d
e
r
I
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
p
r
o
b
l
e
m
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
s
o
l
v
e
d
C
o
u
n
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
T
o
p
i
c
s
R
e
s
p
o
n
s
e
 
{


 
 
u
n
i
q
u
e
P
r
o
b
l
e
m
s
:
 
n
u
m
b
e
r
;


 
 
t
o
p
i
c
s
:
 
D
s
a
T
o
p
i
c
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
P
r
o
b
l
e
m
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
l
e
e
t
c
o
d
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
g
f
g
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
a
r
t
i
c
l
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
v
i
d
e
o
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
h
a
c
k
e
r
r
a
n
k
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
c
o
d
e
c
h
e
f
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
m
p
a
n
i
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
h
i
n
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
h
e
e
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
a
c
c
e
p
t
a
n
c
e
R
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
s
o
l
v
e
d
:
 
b
o
o
l
e
a
n
;


 
 
n
o
t
e
s
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
b
o
o
k
m
a
r
k
e
d
?
:
 
b
o
o
l
e
a
n
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
T
o
p
i
c
D
e
t
a
i
l
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
o
r
d
e
r
I
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
P
r
o
b
l
e
m
s
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
S
o
l
v
e
d
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
P
a
g
e
s
:
 
n
u
m
b
e
r
;


 
 
p
a
g
e
:
 
n
u
m
b
e
r
;


 
 
p
r
o
b
l
e
m
s
:
 
D
s
a
P
r
o
b
l
e
m
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
P
r
o
b
l
e
m
D
e
t
a
i
l
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
l
e
e
t
c
o
d
e
I
d
?
:
 
n
u
m
b
e
r
;


 
 
l
e
e
t
c
o
d
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
g
f
g
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
a
r
t
i
c
l
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
v
i
d
e
o
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
h
a
c
k
e
r
r
a
n
k
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
c
o
d
e
c
h
e
f
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
m
p
a
n
i
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
h
i
n
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
h
e
e
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
e
x
a
m
p
l
e
s
?
:
 
s
t
r
i
n
g
;


 
 
c
o
n
s
t
r
a
i
n
t
s
?
:
 
s
t
r
i
n
g
;


 
 
a
c
c
e
p
t
a
n
c
e
R
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
A
c
c
e
p
t
e
d
?
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
S
u
b
m
i
s
s
i
o
n
s
?
:
 
n
u
m
b
e
r
;


 
 
s
i
m
i
l
a
r
Q
u
e
s
t
i
o
n
s
?
:
 
{
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;
 
s
l
u
g
:
 
s
t
r
i
n
g
;
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;
 
u
r
l
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
c
a
t
e
g
o
r
y
?
:
 
s
t
r
i
n
g
;


 
 
i
s
P
r
e
m
i
u
m
:
 
b
o
o
l
e
a
n
;


 
 
s
o
l
v
e
d
:
 
b
o
o
l
e
a
n
;


 
 
b
o
o
k
m
a
r
k
e
d
:
 
b
o
o
l
e
a
n
;


 
 
n
o
t
e
s
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
P
r
o
g
r
e
s
s
 
{


 
 
t
o
t
a
l
P
r
o
b
l
e
m
s
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
S
o
l
v
e
d
:
 
n
u
m
b
e
r
;


 
 
b
y
D
i
f
f
i
c
u
l
t
y
:
 
{


 
 
 
 
e
a
s
y
:
 
{
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
 
}
;


 
 
 
 
m
e
d
i
u
m
:
 
{
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
 
}
;


 
 
 
 
h
a
r
d
:
 
{
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
 
}
;


 
 
}
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
A
p
p
r
o
a
c
h
E
n
t
r
y
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
l
e
x
i
t
y
:
 
s
t
r
i
n
g
;


 
 
c
o
n
t
e
n
t
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
S
i
m
i
l
a
r
P
r
o
b
l
e
m
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
C
o
m
p
a
n
y
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
c
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
P
a
t
t
e
r
n
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
c
o
u
n
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
C
o
m
p
a
n
y
T
r
a
c
k
S
t
a
t
s
 
{


 
 
c
o
m
p
a
n
y
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
;


 
 
d
i
f
f
i
c
u
l
t
y
B
r
e
a
k
d
o
w
n
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
 
}
>
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
S
h
e
e
t
S
t
a
t
s
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
L
i
s
t
 
{


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
s
o
l
v
e
d
:
 
n
u
m
b
e
r
;


 
 
e
s
t
i
m
a
t
e
d
H
o
u
r
s
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
B
o
o
k
m
a
r
k
I
t
e
m
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
p
r
o
b
l
e
m
I
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
l
e
e
t
c
o
d
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
g
f
g
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
m
p
a
n
i
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
h
e
e
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
a
c
c
e
p
t
a
n
c
e
R
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
s
o
l
v
e
d
:
 
b
o
o
l
e
a
n
;


 
 
c
r
e
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
C
o
m
p
a
n
y
P
r
o
b
l
e
m
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
l
e
e
t
c
o
d
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
g
f
g
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
a
r
t
i
c
l
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
v
i
d
e
o
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
h
a
c
k
e
r
r
a
n
k
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
c
o
d
e
c
h
e
f
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
m
p
a
n
i
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
h
i
n
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
h
e
e
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
a
c
c
e
p
t
a
n
c
e
R
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
s
o
l
v
e
d
:
 
b
o
o
l
e
a
n
;


 
 
n
o
t
e
s
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
b
o
o
k
m
a
r
k
e
d
:
 
b
o
o
l
e
a
n
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
P
a
g
i
n
a
t
e
d
P
r
o
b
l
e
m
s
 
{


 
 
p
r
o
b
l
e
m
s
:
 
D
s
a
C
o
m
p
a
n
y
P
r
o
b
l
e
m
[
]
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
P
a
g
e
s
:
 
n
u
m
b
e
r
;


 
 
p
a
g
e
:
 
n
u
m
b
e
r
;


}




/
/
 
D
S
A
 
C
o
d
e
 
E
x
e
c
u
t
i
o
n


e
x
p
o
r
t
 
t
y
p
e
 
D
s
a
L
a
n
g
u
a
g
e
 
=
 
"
p
y
t
h
o
n
"
 
|
 
"
c
p
p
"
 
|
 
"
j
a
v
a
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
T
e
s
t
C
a
s
e
R
e
s
u
l
t
 
{


 
 
i
n
p
u
t
:
 
s
t
r
i
n
g
;


 
 
e
x
p
e
c
t
e
d
:
 
s
t
r
i
n
g
;


 
 
a
c
t
u
a
l
:
 
s
t
r
i
n
g
;


 
 
p
a
s
s
e
d
:
 
b
o
o
l
e
a
n
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
t
i
m
e
M
s
:
 
n
u
m
b
e
r
;


 
 
m
e
m
o
r
y
K
b
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
u
s
I
d
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
u
s
D
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
s
t
d
e
r
r
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
c
o
m
p
i
l
e
O
u
t
p
u
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
E
x
e
c
u
t
i
o
n
R
e
s
u
l
t
 
{


 
 
p
a
s
s
e
d
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
a
l
l
P
a
s
s
e
d
:
 
b
o
o
l
e
a
n
;


 
 
r
e
s
u
l
t
s
:
 
D
s
a
T
e
s
t
C
a
s
e
R
e
s
u
l
t
[
]
;


 
 
s
u
b
m
i
s
s
i
o
n
I
d
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
C
o
d
e
R
e
v
i
e
w
 
{


 
 
t
i
m
e
C
o
m
p
l
e
x
i
t
y
:
 
s
t
r
i
n
g
;


 
 
s
p
a
c
e
C
o
m
p
l
e
x
i
t
y
:
 
s
t
r
i
n
g
;


 
 
r
e
a
d
a
b
i
l
i
t
y
:
 
{


 
 
 
 
s
c
o
r
e
:
 
n
u
m
b
e
r
;


 
 
 
 
f
e
e
d
b
a
c
k
:
 
s
t
r
i
n
g
;


 
 
}
;


 
 
e
d
g
e
C
a
s
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
u
g
g
e
s
t
i
o
n
s
:
 
s
t
r
i
n
g
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
S
t
r
e
a
k
 
{


 
 
c
u
r
r
e
n
t
S
t
r
e
a
k
:
 
n
u
m
b
e
r
;


 
 
l
o
n
g
e
s
t
S
t
r
e
a
k
:
 
n
u
m
b
e
r
;


 
 
s
o
l
v
e
d
T
o
d
a
y
:
 
b
o
o
l
e
a
n
;


 
 
l
a
s
t
S
o
l
v
e
d
D
a
t
e
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
a
c
t
i
v
e
D
a
y
s
:
 
s
t
r
i
n
g
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
D
s
a
S
u
b
m
i
s
s
i
o
n
S
u
m
m
a
r
y
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
l
a
n
g
u
a
g
e
:
 
D
s
a
L
a
n
g
u
a
g
e
;


 
 
c
o
d
e
:
 
s
t
r
i
n
g
;


 
 
p
a
s
s
e
d
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
a
l
l
P
a
s
s
e
d
:
 
b
o
o
l
e
a
n
;


 
 
t
i
m
e
M
s
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
m
e
m
o
r
y
K
b
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
c
r
e
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


}




/
/
 
L
e
e
t
C
o
d
e
 
I
m
p
o
r
t


e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
e
t
c
o
d
e
I
m
p
o
r
t
P
r
e
v
i
e
w
I
t
e
m
 
{


 
 
p
r
o
b
l
e
m
I
d
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
s
o
l
v
e
d
A
t
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
e
t
c
o
d
e
I
m
p
o
r
t
P
r
e
v
i
e
w
 
{


 
 
m
a
t
c
h
e
d
:
 
n
u
m
b
e
r
;


 
 
u
n
m
a
t
c
h
e
d
:
 
n
u
m
b
e
r
;


 
 
a
l
r
e
a
d
y
S
o
l
v
e
d
:
 
n
u
m
b
e
r
;


 
 
n
e
w
S
o
l
v
e
s
:
 
n
u
m
b
e
r
;


 
 
t
o
k
e
n
:
 
s
t
r
i
n
g
;


 
 
p
r
e
v
i
e
w
:
 
L
e
e
t
c
o
d
e
I
m
p
o
r
t
P
r
e
v
i
e
w
I
t
e
m
[
]
;


 
 
l
a
s
t
I
m
p
o
r
t
?
:
 
{
 
i
m
p
o
r
t
e
d
A
t
:
 
s
t
r
i
n
g
;
 
u
s
e
r
n
a
m
e
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
 
}
 
|
 
n
u
l
l
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
e
t
c
o
d
e
I
m
p
o
r
t
R
e
s
u
l
t
 
{


 
 
i
m
p
o
r
t
e
d
:
 
n
u
m
b
e
r
;


 
 
s
k
i
p
p
e
d
:
 
n
u
m
b
e
r
;


 
 
i
m
p
o
r
t
e
d
A
t
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
L
e
e
t
c
o
d
e
I
m
p
o
r
t
S
t
a
t
u
s
 
{


 
 
l
a
s
t
I
m
p
o
r
t
:
 
{


 
 
 
 
i
m
p
o
r
t
e
d
A
t
:
 
s
t
r
i
n
g
;


 
 
 
 
u
s
e
r
n
a
m
e
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
;


 
 
 
 
m
a
t
c
h
e
d
:
 
n
u
m
b
e
r
;


 
 
 
 
i
m
p
o
r
t
e
d
:
 
n
u
m
b
e
r
;


 
 
}
 
|
 
n
u
l
l
;


}




/
/
 
A
p
t
i
t
u
d
e
 
P
r
a
c
t
i
c
e


e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
C
a
t
e
g
o
r
y
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
t
o
p
i
c
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
q
u
e
s
t
i
o
n
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
a
n
s
w
e
r
e
d
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
t
o
p
i
c
s
:
 
A
p
t
i
t
u
d
e
T
o
p
i
c
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
T
o
p
i
c
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
q
u
e
s
t
i
o
n
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
a
n
s
w
e
r
e
d
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
c
o
r
r
e
c
t
C
o
u
n
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
Q
u
e
s
t
i
o
n
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
q
u
e
s
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
A
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
B
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
C
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
D
:
 
s
t
r
i
n
g
;


 
 
o
p
t
i
o
n
E
?
:
 
s
t
r
i
n
g
;


 
 
c
o
r
r
e
c
t
A
n
s
w
e
r
?
:
 
s
t
r
i
n
g
;


 
 
e
x
p
l
a
n
a
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
a
n
i
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
a
n
s
w
e
r
e
d
:
 
b
o
o
l
e
a
n
;


 
 
c
o
r
r
e
c
t
:
 
b
o
o
l
e
a
n
;


 
 
t
o
p
i
c
N
a
m
e
?
:
 
s
t
r
i
n
g
;


 
 
t
o
p
i
c
S
l
u
g
?
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
t
y
p
e
 
A
p
t
i
t
u
d
e
D
i
f
f
i
c
u
l
t
y
L
e
v
e
l
 
=
 
"
E
A
S
Y
"
 
|
 
"
M
E
D
I
U
M
"
 
|
 
"
H
A
R
D
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
T
o
p
i
c
D
e
t
a
i
l
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
c
a
t
e
g
o
r
y
N
a
m
e
:
 
s
t
r
i
n
g
;


 
 
c
a
t
e
g
o
r
y
S
l
u
g
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
:
 
n
u
m
b
e
r
;


 
 
c
u
r
r
e
n
t
D
i
f
f
i
c
u
l
t
y
?
:
 
A
p
t
i
t
u
d
e
D
i
f
f
i
c
u
l
t
y
L
e
v
e
l
;


 
 
p
a
g
e
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
P
a
g
e
s
:
 
n
u
m
b
e
r
;


 
 
q
u
e
s
t
i
o
n
s
:
 
A
p
t
i
t
u
d
e
Q
u
e
s
t
i
o
n
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
A
n
s
w
e
r
R
e
s
u
l
t
 
{


 
 
c
o
r
r
e
c
t
:
 
b
o
o
l
e
a
n
;


 
 
c
o
r
r
e
c
t
A
n
s
w
e
r
:
 
s
t
r
i
n
g
;


 
 
e
x
p
l
a
n
a
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
c
u
r
r
e
n
t
D
i
f
f
i
c
u
l
t
y
:
 
A
p
t
i
t
u
d
e
D
i
f
f
i
c
u
l
t
y
L
e
v
e
l
;


 
 
p
r
e
v
i
o
u
s
D
i
f
f
i
c
u
l
t
y
:
 
A
p
t
i
t
u
d
e
D
i
f
f
i
c
u
l
t
y
L
e
v
e
l
;


 
 
d
i
f
f
i
c
u
l
t
y
C
h
a
n
g
e
:
 
"
i
n
c
r
e
a
s
e
d
"
 
|
 
"
d
e
c
r
e
a
s
e
d
"
 
|
 
n
u
l
l
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
C
o
m
p
a
n
y
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
c
o
u
n
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
C
o
m
p
a
n
y
Q
u
e
s
t
i
o
n
s
 
{


 
 
c
o
m
p
a
n
y
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
p
a
g
e
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
P
a
g
e
s
:
 
n
u
m
b
e
r
;


 
 
q
u
e
s
t
i
o
n
s
:
 
A
p
t
i
t
u
d
e
Q
u
e
s
t
i
o
n
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
P
r
o
g
r
e
s
s
 
{


 
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
A
n
s
w
e
r
e
d
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
C
o
r
r
e
c
t
:
 
n
u
m
b
e
r
;


 
 
c
u
r
r
e
n
t
S
t
r
e
a
k
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
T
o
p
i
c
 
{


 
 
t
o
p
i
c
I
d
:
 
n
u
m
b
e
r
;


 
 
t
o
p
i
c
N
a
m
e
:
 
s
t
r
i
n
g
;


 
 
t
o
p
i
c
S
l
u
g
:
 
s
t
r
i
n
g
;


 
 
c
a
t
e
g
o
r
y
N
a
m
e
:
 
s
t
r
i
n
g
;


 
 
c
a
t
e
g
o
r
y
S
l
u
g
:
 
s
t
r
i
n
g
;


 
 
a
n
s
w
e
r
e
d
:
 
n
u
m
b
e
r
;


 
 
c
o
r
r
e
c
t
:
 
n
u
m
b
e
r
;


 
 
a
c
c
u
r
a
c
y
:
 
n
u
m
b
e
r
;


 
 
i
s
W
e
a
k
:
 
b
o
o
l
e
a
n
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
s
 
{


 
 
t
o
t
a
l
A
n
s
w
e
r
e
d
:
 
n
u
m
b
e
r
;


 
 
m
i
n
i
m
u
m
A
n
s
w
e
r
e
d
:
 
n
u
m
b
e
r
;


 
 
i
s
R
e
a
d
y
:
 
b
o
o
l
e
a
n
;


 
 
t
o
p
i
c
s
:
 
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
T
o
p
i
c
[
]
;


 
 
f
o
c
u
s
R
e
c
o
m
m
e
n
d
a
t
i
o
n
s
:
 
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
T
o
p
i
c
[
]
;


}


