
i
m
p
o
r
t
 
t
y
p
e
 
{
 
U
s
e
r
R
o
l
e
,
 
U
s
e
r
 
}
 
f
r
o
m
 
"
.
/
u
s
e
r
.
t
y
p
e
s
"
;




e
x
p
o
r
t
 
c
o
n
s
t
 
J
o
b
S
t
a
t
u
s
 
=
 
{


 
 
D
R
A
F
T
:
 
"
D
R
A
F
T
"
,


 
 
P
U
B
L
I
S
H
E
D
:
 
"
P
U
B
L
I
S
H
E
D
"
,


 
 
C
L
O
S
E
D
:
 
"
C
L
O
S
E
D
"
,


 
 
A
R
C
H
I
V
E
D
:
 
"
A
R
C
H
I
V
E
D
"
,


}
 
a
s
 
c
o
n
s
t
;


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
 
J
o
b
S
t
a
t
u
s
 
=
 
(
t
y
p
e
o
f
 
J
o
b
S
t
a
t
u
s
)
[
k
e
y
o
f
 
t
y
p
e
o
f
 
J
o
b
S
t
a
t
u
s
]
;


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
p
l
i
c
a
t
i
o
n
S
t
a
t
u
s
 
=
 
"
A
P
P
L
I
E
D
"
 
|
 
"
I
N
_
P
R
O
G
R
E
S
S
"
 
|
 
"
S
H
O
R
T
L
I
S
T
E
D
"
 
|
 
"
R
E
J
E
C
T
E
D
"
 
|
 
"
H
I
R
E
D
"
 
|
 
"
W
I
T
H
D
R
A
W
N
"
;


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
 
R
o
u
n
d
S
t
a
t
u
s
 
=
 
"
P
E
N
D
I
N
G
"
 
|
 
"
I
N
_
P
R
O
G
R
E
S
S
"
 
|
 
"
C
O
M
P
L
E
T
E
D
"
 
|
 
"
S
K
I
P
P
E
D
"
;


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
 
F
i
e
l
d
T
y
p
e
 
=
 
"
T
E
X
T
"
 
|
 
"
T
E
X
T
A
R
E
A
"
 
|
 
"
D
R
O
P
D
O
W
N
"
 
|
 
"
M
U
L
T
I
_
S
E
L
E
C
T
"
 
|
 
"
F
I
L
E
_
U
P
L
O
A
D
"
 
|
 
"
B
O
O
L
E
A
N
"
 
|
 
"
N
U
M
E
R
I
C
"
 
|
 
"
D
A
T
E
"
 
|
 
"
E
M
A
I
L
"
 
|
 
"
U
R
L
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
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
 
{


 
 
i
d
:
 
s
t
r
i
n
g
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
;


 
 
f
i
e
l
d
T
y
p
e
:
 
F
i
e
l
d
T
y
p
e
;


 
 
r
e
q
u
i
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


 
 
p
l
a
c
e
h
o
l
d
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


 
 
o
p
t
i
o
n
s
?
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


 
 
v
a
l
i
d
a
t
i
o
n
?
:
 
{


 
 
 
 
m
i
n
?
:
 
n
u
m
b
e
r
;


 
 
 
 
m
a
x
?
:
 
n
u
m
b
e
r
;


 
 
 
 
m
a
x
L
e
n
g
t
h
?
:
 
n
u
m
b
e
r
;


 
 
 
 
m
a
x
F
i
l
e
S
i
z
e
?
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
o
w
e
d
T
y
p
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
[
]
;


 
 
}
;


}




/
*
*
 
S
c
o
r
i
n
g
 
r
u
b
r
i
c
 
f
o
r
 
a
 
s
i
n
g
l
e
 
c
r
i
t
e
r
i
o
n
 
w
i
t
h
i
n
 
a
 
h
i
r
i
n
g
 
r
o
u
n
d
 
*
/


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
 
E
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
o
n
 
{


 
 
/
*
*
 
U
n
i
q
u
e
 
i
d
e
n
t
i
f
i
e
r
 
f
o
r
 
t
h
i
s
 
c
r
i
t
e
r
i
o
n
 
e
n
t
r
y
 
*
/


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
/
*
*
 
H
u
m
a
n
-
r
e
a
d
a
b
l
e
 
n
a
m
e
 
o
f
 
t
h
e
 
c
r
i
t
e
r
i
o
n
 
(
e
.
g
.
 
"
C
o
m
m
u
n
i
c
a
t
i
o
n
 
S
k
i
l
l
s
"
)
 
*
/


 
 
c
r
i
t
e
r
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


 
 
/
*
*
 
M
a
x
i
m
u
m
 
p
o
s
s
i
b
l
e
 
s
c
o
r
e
 
a
 
c
a
n
d
i
d
a
t
e
 
c
a
n
 
r
e
c
e
i
v
e
 
f
o
r
 
t
h
i
s
 
c
r
i
t
e
r
i
o
n
 
*
/


 
 
m
a
x
S
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


 
 
/
*
*


 
 
 
*
 
R
e
l
a
t
i
v
e
 
i
m
p
o
r
t
a
n
c
e
 
w
e
i
g
h
t
 
u
s
e
d
 
t
o
 
c
o
m
p
u
t
e
 
a
 
w
e
i
g
h
t
e
d
 
a
g
g
r
e
g
a
t
e
 
a
c
r
o
s
s
 
c
r
i
t
e
r
i
a
.


 
 
 
*
 
W
h
e
n
 
o
m
i
t
t
e
d
 
a
l
l
 
c
r
i
t
e
r
i
a
 
a
r
e
 
w
e
i
g
h
t
e
d
 
e
q
u
a
l
l
y
.


 
 
 
*
/


 
 
w
e
i
g
h
t
?
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
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
 
{


 
 
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
r
r
e
c
t
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


 
 
p
o
i
n
t
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
 
R
o
u
n
d
 
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


 
 
j
o
b
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


 
 
i
n
s
t
r
u
c
t
i
o
n
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
u
s
t
o
m
F
i
e
l
d
s
:
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
[
]
;


 
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
E
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
o
n
[
]
;


 
 
a
s
s
e
s
s
m
e
n
t
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
 
A
s
s
e
s
s
m
e
n
t
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


 
 
t
i
m
e
L
i
m
i
t
S
e
c
s
?
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


 
 
a
u
t
o
G
r
a
d
e
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


 
 
a
c
t
i
v
a
t
e
A
t
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


 
 
_
c
o
u
n
t
?
:
 
{
 
r
o
u
n
d
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
:
 
n
u
m
b
e
r
 
}
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


 
 
u
p
d
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
 
J
o
b
 
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


 
 
l
o
c
a
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
a
l
a
r
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
t
a
t
u
s
:
 
J
o
b
S
t
a
t
u
s
;


 
 
c
u
s
t
o
m
F
i
e
l
d
s
:
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
[
]
;


 
 
d
e
a
d
l
i
n
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


 
 
r
e
c
r
u
i
t
e
r
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


 
 
r
e
c
r
u
i
t
e
r
?
:
 
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
 
c
o
m
p
a
n
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
 
d
e
s
i
g
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
 
}
;


 
 
r
o
u
n
d
s
?
:
 
R
o
u
n
d
[
]
;


 
 
_
c
o
u
n
t
?
:
 
{
 
a
p
p
l
i
c
a
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
 
r
o
u
n
d
s
:
 
n
u
m
b
e
r
 
}
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


 
 
u
p
d
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
 
R
o
u
n
d
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


 
 
a
p
p
l
i
c
a
t
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


 
 
r
o
u
n
d
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
:
 
R
o
u
n
d
S
t
a
t
u
s
;


 
 
f
i
e
l
d
A
n
s
w
e
r
s
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
 
u
n
k
n
o
w
n
>
;


 
 
a
t
t
a
c
h
m
e
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


 
 
e
v
a
l
u
a
t
i
o
n
S
c
o
r
e
s
?
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
 
c
o
m
m
e
n
t
?
:
 
s
t
r
i
n
g
 
}
>
;


 
 
r
e
c
r
u
i
t
e
r
N
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
;


 
 
s
u
b
m
i
t
t
e
d
A
t
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
v
a
l
u
a
t
e
d
A
t
?
:
 
s
t
r
i
n
g
;


 
 
r
o
u
n
d
?
:
 
R
o
u
n
d
;


 
 
a
p
p
l
i
c
a
t
i
o
n
?
:
 
A
p
p
l
i
c
a
t
i
o
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


 
 
u
p
d
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
 
A
p
p
l
i
c
a
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


 
 
j
o
b
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
u
d
e
n
t
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
:
 
A
p
p
l
i
c
a
t
i
o
n
S
t
a
t
u
s
;


 
 
c
u
r
r
e
n
t
R
o
u
n
d
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


 
 
c
u
s
t
o
m
F
i
e
l
d
A
n
s
w
e
r
s
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
 
u
n
k
n
o
w
n
>
;


 
 
r
e
s
u
m
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


 
 
c
o
v
e
r
L
e
t
t
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


 
 
s
t
u
d
e
n
t
N
o
t
e
s
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


 
 
j
o
b
?
:
 
J
o
b
;


 
 
s
t
u
d
e
n
t
?
:
 
U
s
e
r
;


 
 
r
o
u
n
d
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
 
R
o
u
n
d
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
[
]
;


 
 
_
c
o
u
n
t
?
:
 
{
 
r
o
u
n
d
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
:
 
n
u
m
b
e
r
 
}
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


 
 
u
p
d
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
 
A
d
m
i
n
D
a
s
h
b
o
a
r
d
D
a
t
a
 
{


 
 
t
o
t
a
l
S
t
u
d
e
n
t
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
R
e
c
r
u
i
t
e
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


 
 
t
o
t
a
l
J
o
b
s
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
t
i
v
e
J
o
b
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
p
p
l
i
c
a
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


 
 
h
i
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


 
 
s
t
a
t
u
s
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
 
n
u
m
b
e
r
>
;


 
 
r
e
c
e
n
t
U
s
e
r
s
:
 
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
 
e
m
a
i
l
:
 
s
t
r
i
n
g
;
 
r
o
l
e
:
 
U
s
e
r
R
o
l
e
;
 
i
s
A
c
t
i
v
e
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
 
}
[
]
;


 
 
r
e
c
e
n
t
J
o
b
s
:
 
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
 
s
t
a
t
u
s
:
 
J
o
b
S
t
a
t
u
s
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
 
r
e
c
r
u
i
t
e
r
:
 
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
 
}
;
 
_
c
o
u
n
t
:
 
{
 
a
p
p
l
i
c
a
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
 
}
 
}
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
 
E
x
t
e
r
n
a
l
J
o
b
 
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
 
|
 
n
u
l
l
;


 
 
r
o
l
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
 
|
 
n
u
l
l
;


 
 
s
a
l
a
r
y
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
u
r
r
e
n
c
y
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


 
 
l
o
c
a
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
 
|
 
n
u
l
l
;


 
 
a
p
p
l
y
L
i
n
k
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


 
 
e
x
p
i
r
e
s
A
t
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
r
e
a
t
e
d
A
t
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
 
i
n
t
e
r
f
a
c
e
 
E
x
t
e
r
n
a
l
A
p
p
l
i
c
a
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


 
 
s
t
u
d
e
n
t
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


 
 
a
d
m
i
n
J
o
b
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
u
d
e
n
t
N
o
t
e
s
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


 
 
u
p
d
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


 
 
a
d
m
i
n
J
o
b
:
 
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
 
|
 
n
u
l
l
;


 
 
 
 
r
o
l
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


 
 
 
 
l
o
c
a
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
 
|
 
n
u
l
l
;


 
 
 
 
s
a
l
a
r
y
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


 
 
 
 
a
p
p
l
y
L
i
n
k
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
;


}




/
/
 
S
c
r
a
p
e
d
 
J
o
b
s


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
 
S
c
r
a
p
e
d
J
o
b
S
t
a
t
u
s
 
=
 
"
A
C
T
I
V
E
"
 
|
 
"
E
X
P
I
R
E
D
"
 
|
 
"
R
E
M
O
V
E
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
 
S
c
r
a
p
e
d
J
o
b
 
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


 
 
l
o
c
a
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
a
l
a
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


 
 
a
p
p
l
i
c
a
t
i
o
n
U
r
l
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


 
 
s
o
u
r
c
e
I
d
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
u
r
c
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


 
 
s
t
a
t
u
s
:
 
S
c
r
a
p
e
d
J
o
b
S
t
a
t
u
s
;


 
 
s
c
r
a
p
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


 
 
l
a
s
t
S
e
e
n
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


 
 
m
e
t
a
d
a
t
a
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
 
u
n
k
n
o
w
n
>
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


 
 
u
p
d
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
 
S
c
r
a
p
e
d
J
o
b
S
o
u
r
c
e
 
{


 
 
i
d
:
 
s
t
r
i
n
g
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


}




/
/
 
T
r
e
n
d
s


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
 
T
r
e
n
d
s
O
v
e
r
v
i
e
w
 
{


 
 
t
o
t
a
l
J
o
b
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
c
r
a
p
e
d
J
o
b
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
C
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


 
 
t
o
p
S
k
i
l
l
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
 
T
r
e
n
d
S
k
i
l
l
 
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


 
 
d
e
m
a
n
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


 
 
s
u
p
p
l
y
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
 
T
r
e
n
d
L
o
c
a
t
i
o
n
 
{


 
 
c
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


 
 
j
o
b
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
 
T
r
e
n
d
S
a
l
a
r
y
 
{


 
 
r
a
n
g
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
 
T
r
e
n
d
T
i
m
e
l
i
n
e
 
{


 
 
m
o
n
t
h
:
 
s
t
r
i
n
g
;


 
 
j
o
b
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
c
r
a
p
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
 
T
r
e
n
d
S
u
p
p
l
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


 
 
u
s
e
r
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


