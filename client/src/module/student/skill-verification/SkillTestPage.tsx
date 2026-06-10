
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
L
a
y
o
u
t
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
,
 
u
s
e
C
a
l
l
b
a
c
k
,
 
u
s
e
R
e
f
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
P
a
r
a
m
s
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
A
r
r
o
w
L
e
f
t
,


 
 
C
l
o
c
k
,


 
 
L
o
a
d
e
r
2
,


 
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,


 
 
S
h
i
e
l
d
C
h
e
c
k
,


 
 
E
y
e
,


 
 
E
y
e
O
f
f
,


 
 
M
a
x
i
m
i
z
e
,


 
 
C
h
e
v
r
o
n
L
e
f
t
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
C
a
m
e
r
a
,


 
 
B
a
n
,


 
 
S
h
i
e
l
d
,


 
 
F
i
l
e
T
e
x
t
,


 
 
T
r
o
p
h
y
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
t
o
a
s
t
"
;


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


 
 
S
k
i
l
l
T
e
s
t
W
i
t
h
Q
u
e
s
t
i
o
n
s
,


 
 
S
k
i
l
l
T
e
s
t
S
u
b
m
i
t
R
e
s
u
l
t
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
u
s
e
P
r
o
c
t
o
r
i
n
g
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
h
o
o
k
s
/
u
s
e
P
r
o
c
t
o
r
i
n
g
"
;


i
m
p
o
r
t
 
P
r
o
c
t
o
r
i
n
g
C
a
m
e
r
a
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
P
r
o
c
t
o
r
i
n
g
C
a
m
e
r
a
"
;


i
m
p
o
r
t
 
P
r
o
c
t
o
r
W
a
r
n
i
n
g
O
v
e
r
l
a
y
 
f
r
o
m
 
"
.
/
P
r
o
c
t
o
r
W
a
r
n
i
n
g
O
v
e
r
l
a
y
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




c
o
n
s
t
 
O
P
T
I
O
N
_
L
A
B
E
L
S
 
=
 
[
"
A
"
,
 
"
B
"
,
 
"
C
"
,
 
"
D
"
]
 
a
s
 
c
o
n
s
t
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
i
m
e
r
 
h
o
o
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


f
u
n
c
t
i
o
n
 
u
s
e
C
o
u
n
t
d
o
w
n
(
t
o
t
a
l
S
e
c
o
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
 
|
 
n
u
l
l
,
 
o
n
E
x
p
i
r
e
:
 
(
)
 
=
>
 
v
o
i
d
)
 
{


 
 
c
o
n
s
t
 
[
r
e
m
a
i
n
i
n
g
,
 
s
e
t
R
e
m
a
i
n
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
t
o
t
a
l
S
e
c
o
n
d
s
 
?
?
 
0
)
;


 
 
c
o
n
s
t
 
o
n
E
x
p
i
r
e
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
E
x
p
i
r
e
)
;


 
 
u
s
e
L
a
y
o
u
t
E
f
f
e
c
t
(
(
)
 
=
>
 
{
 
o
n
E
x
p
i
r
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
E
x
p
i
r
e
;
 
}
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
t
o
t
a
l
S
e
c
o
n
d
s
 
|
|
 
t
o
t
a
l
S
e
c
o
n
d
s
 
<
=
 
0
)
 
r
e
t
u
r
n
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
R
e
m
a
i
n
i
n
g
(
t
o
t
a
l
S
e
c
o
n
d
s
)
;




 
 
 
 
c
o
n
s
t
 
i
n
t
e
r
v
a
l
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
R
e
m
a
i
n
i
n
g
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
p
r
e
v
 
<
=
 
1
)
 
{


 
 
 
 
 
 
 
 
 
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
i
n
t
e
r
v
a
l
)
;


 
 
 
 
 
 
 
 
 
 
o
n
E
x
p
i
r
e
R
e
f
.
c
u
r
r
e
n
t
(
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
0
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
p
r
e
v
 
-
 
1
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
1
0
0
0
)
;




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
i
n
t
e
r
v
a
l
)
;


 
 
}
,
 
[
t
o
t
a
l
S
e
c
o
n
d
s
]
)
;




 
 
c
o
n
s
t
 
m
i
n
s
 
=
 
M
a
t
h
.
f
l
o
o
r
(
r
e
m
a
i
n
i
n
g
 
/
 
6
0
)
;


 
 
c
o
n
s
t
 
s
e
c
s
 
=
 
r
e
m
a
i
n
i
n
g
 
%
 
6
0
;


 
 
c
o
n
s
t
 
f
o
r
m
a
t
t
e
d
 
=
 
`
$
{
S
t
r
i
n
g
(
m
i
n
s
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
:
$
{
S
t
r
i
n
g
(
s
e
c
s
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
`
;


 
 
c
o
n
s
t
 
i
s
U
r
g
e
n
t
 
=
 
t
o
t
a
l
S
e
c
o
n
d
s
 
!
=
=
 
n
u
l
l
 
&
&
 
r
e
m
a
i
n
i
n
g
 
<
=
 
6
0
;




 
 
r
e
t
u
r
n
 
{
 
r
e
m
a
i
n
i
n
g
,
 
f
o
r
m
a
t
t
e
d
,
 
i
s
U
r
g
e
n
t
 
}
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
C
o
m
p
o
n
e
n
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
S
k
i
l
l
T
e
s
t
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
t
e
s
t
I
d
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;




 
 
c
o
n
s
t
 
[
t
e
s
t
,
 
s
e
t
T
e
s
t
]
 
=
 
u
s
e
S
t
a
t
e
<
S
k
i
l
l
T
e
s
t
W
i
t
h
Q
u
e
s
t
i
o
n
s
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
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
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
a
n
s
w
e
r
s
,
 
s
e
t
A
n
s
w
e
r
s
]
 
=
 
u
s
e
S
t
a
t
e
<
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
n
u
m
b
e
r
>
>
(
{
}
)
;


 
 
c
o
n
s
t
 
[
c
u
r
r
e
n
t
Q
,
 
s
e
t
C
u
r
r
e
n
t
Q
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;


 
 
c
o
n
s
t
 
[
s
u
b
m
i
t
t
i
n
g
,
 
s
e
t
S
u
b
m
i
t
t
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
r
e
s
u
l
t
,
 
s
e
t
R
e
s
u
l
t
]
 
=
 
u
s
e
S
t
a
t
e
<
S
k
i
l
l
T
e
s
t
S
u
b
m
i
t
R
e
s
u
l
t
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
s
t
a
r
t
e
d
,
 
s
e
t
S
t
a
r
t
e
d
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
c
a
m
e
r
a
R
e
a
d
y
,
 
s
e
t
C
a
m
e
r
a
R
e
a
d
y
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
c
a
m
e
r
a
E
r
r
o
r
,
 
s
e
t
C
a
m
e
r
a
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
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
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
r
e
t
r
y
A
f
t
e
r
,
 
s
e
t
R
e
t
r
y
A
f
t
e
r
]
 
=
 
u
s
e
S
t
a
t
e
<
D
a
t
e
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;
 


 
 
c
o
n
s
t
 
v
i
d
e
o
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
V
i
d
e
o
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
s
t
r
e
a
m
R
e
f
 
=
 
u
s
e
R
e
f
<
M
e
d
i
a
S
t
r
e
a
m
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
s
u
b
m
i
t
t
i
n
g
R
e
f
 
=
 
u
s
e
R
e
f
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
t
e
r
m
i
n
a
t
e
R
e
f
 
=
 
u
s
e
R
e
f
<
(
)
 
=
>
 
v
o
i
d
>
(
u
n
d
e
f
i
n
e
d
)
;


 
 
c
o
n
s
t
 
[
r
e
m
a
i
n
i
n
g
S
e
c
s
,
 
s
e
t
R
e
m
a
i
n
i
n
g
S
e
c
s
]
 
=
 
u
s
e
S
t
a
t
e
<
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
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
q
u
e
s
t
i
o
n
s
R
e
f
 
=
 
u
s
e
R
e
f
<
S
k
i
l
l
T
e
s
t
W
i
t
h
Q
u
e
s
t
i
o
n
s
[
"
q
u
e
s
t
i
o
n
s
"
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
Q
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
/
/
 
K
e
e
p
 
r
e
f
s
 
u
p
d
a
t
e
d
 
t
o
 
p
r
e
v
e
n
t
 
s
t
a
l
e
 
s
t
a
t
e
 
i
n
 
k
e
y
b
o
a
r
d
 
s
h
o
r
t
c
u
t
s


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
q
u
e
s
t
i
o
n
s
R
e
f
.
c
u
r
r
e
n
t
 
=
 
t
e
s
t
?
.
q
u
e
s
t
i
o
n
s
 
?
?
 
[
]
;


 
 
}
,
 
[
t
e
s
t
]
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
u
r
r
e
n
t
Q
R
e
f
.
c
u
r
r
e
n
t
 
=
 
c
u
r
r
e
n
t
Q
;


 
 
}
,
 
[
c
u
r
r
e
n
t
Q
]
)
;






 
 
/
*
 
-
-
-
-
 
P
r
e
v
e
n
t
 
c
l
o
s
i
n
g
 
t
a
b
 
d
u
r
i
n
g
 
a
c
t
i
v
e
 
t
e
s
t
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
s
t
a
r
t
e
d
 
|
|
 
r
e
s
u
l
t
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
B
e
f
o
r
e
U
n
l
o
a
d
 
=
 
(
e
:
 
B
e
f
o
r
e
U
n
l
o
a
d
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
}
;


 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
b
e
f
o
r
e
u
n
l
o
a
d
"
,
 
h
a
n
d
l
e
B
e
f
o
r
e
U
n
l
o
a
d
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
b
e
f
o
r
e
u
n
l
o
a
d
"
,
 
h
a
n
d
l
e
B
e
f
o
r
e
U
n
l
o
a
d
)
;


 
 
}
,
 
[
s
t
a
r
t
e
d
,
 
r
e
s
u
l
t
]
)
;




 
 
/
*
 
-
-
-
-
 
P
a
g
e
 
t
i
t
l
e
 
d
u
r
i
n
g
 
t
e
s
t
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
o
r
i
g
i
n
a
l
 
=
 
d
o
c
u
m
e
n
t
.
t
i
t
l
e
;


 
 
 
 
i
f
 
(
s
t
a
r
t
e
d
 
&
&
 
!
r
e
s
u
l
t
)
 
{


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
t
i
t
l
e
 
=
 
"
P
r
o
c
t
o
r
e
d
 
T
e
s
t
 
I
n
 
P
r
o
g
r
e
s
s
"
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
t
i
t
l
e
 
=
 
o
r
i
g
i
n
a
l
;


 
 
 
 
}
;


 
 
}
,
 
[
s
t
a
r
t
e
d
,
 
r
e
s
u
l
t
]
)
;




 
 
/
*
 
-
-
-
-
 
P
r
o
c
t
o
r
i
n
g
 
h
o
o
k
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
h
a
n
d
l
e
T
e
r
m
i
n
a
t
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
t
e
r
m
i
n
a
t
e
R
e
f
.
c
u
r
r
e
n
t
?
.
(
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
p
r
o
c
t
o
r
 
=
 
u
s
e
P
r
o
c
t
o
r
i
n
g
(
{


 
 
 
 
e
n
a
b
l
e
d
:
 
s
t
a
r
t
e
d
 
&
&
 
!
r
e
s
u
l
t
,


 
 
 
 
o
n
T
e
r
m
i
n
a
t
e
:
 
h
a
n
d
l
e
T
e
r
m
i
n
a
t
e
,


 
 
}
)
;




 
 
/
*
 
F
e
t
c
h
 
t
e
s
t
 
d
e
t
a
i
l
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
t
e
s
t
I
d
)
 
r
e
t
u
r
n
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
a
p
i


 
 
 
 
 
 
.
g
e
t
(
`
/
s
k
i
l
l
-
t
e
s
t
s
/
$
{
t
e
s
t
I
d
}
`
)


 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
s
e
t
T
e
s
t
(
r
e
s
.
d
a
t
a
)
)


 
 
 
 
 
 
.
c
a
t
c
h
(
(
e
r
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
e
r
r
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
e
r
r
o
r
 
?
?
 
"
T
e
s
t
 
n
o
t
 
f
o
u
n
d
.
"
)
;


 
 
 
 
 
 
}
)


 
 
 
 
 
 
.
f
i
n
a
l
l
y
(
(
)
 
=
>
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
)
;


 
 
}
,
 
[
t
e
s
t
I
d
]
)
;




 
 
/
*
 
S
t
a
r
t
 
t
e
s
t
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
t
a
r
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
t
e
s
t
I
d
)
 
r
e
t
u
r
n
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
`
/
s
k
i
l
l
-
t
e
s
t
s
/
$
{
t
e
s
t
I
d
}
/
s
t
a
r
t
`
)
;


 
 
 
 
 
 
/
/
 
U
s
e
 
s
e
r
v
e
r
-
d
e
r
i
v
e
d
 
r
e
m
a
i
n
i
n
g
 
t
i
m
e
 
i
n
s
t
e
a
d
 
o
f
 
f
u
l
l
 
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


 
 
 
 
 
 
s
e
t
R
e
m
a
i
n
i
n
g
S
e
c
s
(
r
e
s
.
d
a
t
a
.
r
e
m
a
i
n
i
n
g
S
e
c
s
)
;


 
 
 
 
 
 
s
e
t
T
e
s
t
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
 
 
p
r
e
v
 
?
 
{
 
.
.
.
p
r
e
v
,
 
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
 
r
e
s
.
d
a
t
a
.
q
u
e
s
t
i
o
n
s
 
}
 
:
 
p
r
e
v
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
e
t
S
t
a
r
t
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
a
w
a
i
t
 
p
r
o
c
t
o
r
.
r
e
q
u
e
s
t
F
u
l
l
s
c
r
e
e
n
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
s
t
a
t
u
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
 
d
a
t
a
?
:
 
{
 
r
e
t
r
y
A
f
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
 
e
r
r
o
r
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
i
f
 
(
e
?
.
r
e
s
p
o
n
s
e
?
.
s
t
a
t
u
s
 
=
=
=
 
4
2
9
)
 
{


 
 
 
 
 
 
 
 
s
e
t
R
e
t
r
y
A
f
t
e
r
(
n
e
w
 
D
a
t
e
(
e
.
r
e
s
p
o
n
s
e
!
.
d
a
t
a
!
.
r
e
t
r
y
A
f
t
e
r
!
)
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
C
o
o
l
d
o
w
n
 
a
c
t
i
v
e
!
 
P
l
e
a
s
e
 
w
a
i
t
 
b
e
f
o
r
e
 
r
e
t
a
k
i
n
g
.
"
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
e
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
e
r
r
o
r
 
?
?
 
"
F
a
i
l
e
d
 
t
o
 
s
t
a
r
t
 
t
e
s
t
"
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}
,
 
[
t
e
s
t
I
d
,
 
p
r
o
c
t
o
r
]
)
;




 
 
/
*
 
S
u
b
m
i
t
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
u
b
m
i
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(


 
 
 
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
!
t
e
s
t
 
|
|
 
s
u
b
m
i
t
t
i
n
g
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
s
u
b
m
i
t
t
i
n
g
R
e
f
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;


 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
t
i
n
g
(
t
r
u
e
)
;




 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
n
s
w
e
r
s
P
a
y
l
o
a
d
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
a
n
s
w
e
r
s
)
.
m
a
p
(
(
[
q
I
d
,
 
i
d
x
]
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
I
d
:
 
N
u
m
b
e
r
(
q
I
d
)
,


 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
e
d
I
n
d
e
x
:
 
i
d
x
,


 
 
 
 
 
 
 
 
}
)
)
;




 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
`
/
s
k
i
l
l
-
t
e
s
t
s
/
$
{
t
e
s
t
.
i
d
}
/
s
u
b
m
i
t
`
,
 
{


 
 
 
 
 
 
 
 
 
 
a
n
s
w
e
r
s
:
 
a
n
s
w
e
r
s
P
a
y
l
o
a
d
,


 
 
 
 
 
 
 
 
 
 
p
r
o
c
t
o
r
L
o
g
:
 
p
r
o
c
t
o
r
.
g
e
t
P
r
o
c
t
o
r
L
o
g
(
)
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
s
e
t
R
e
s
u
l
t
(
r
e
s
.
d
a
t
a
)
;




 
 
 
 
 
 
 
 
i
f
 
(
r
e
s
.
d
a
t
a
.
p
a
s
s
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(


 
 
 
 
 
 
 
 
 
 
 
 
"
C
o
n
g
r
a
t
u
l
a
t
i
o
n
s
!
 
Y
o
u
 
p
a
s
s
e
d
 
a
n
d
 
y
o
u
r
 
s
k
i
l
l
 
i
s
 
n
o
w
 
v
e
r
i
f
i
e
d
!
"
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(


 
 
 
 
 
 
 
 
 
 
 
 
`
S
c
o
r
e
:
 
$
{
r
e
s
.
d
a
t
a
.
s
c
o
r
e
}
%
 
-
 
y
o
u
 
n
e
e
d
 
$
{
t
e
s
t
.
p
a
s
s
T
h
r
e
s
h
o
l
d
}
%
 
t
o
 
p
a
s
s
.
`
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
i
f
 
(
d
o
c
u
m
e
n
t
.
f
u
l
l
s
c
r
e
e
n
E
l
e
m
e
n
t
)
 
{


 
 
 
 
 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
e
x
i
t
F
u
l
l
s
c
r
e
e
n
(
)
.
c
a
t
c
h
(
(
)
 
=
>
 
{
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
e
r
r
o
r
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
e
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
e
r
r
o
r
 
?
?
 
"
F
a
i
l
e
d
 
t
o
 
s
u
b
m
i
t
 
t
e
s
t
"
)
;


 
 
 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
 
 
s
u
b
m
i
t
t
i
n
g
R
e
f
.
c
u
r
r
e
n
t
 
=
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
t
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,


 
 
 
 
[
t
e
s
t
,
 
a
n
s
w
e
r
s
,
 
p
r
o
c
t
o
r
]
,


 
 
)
;




 
 
/
/
 
W
i
r
e
 
t
e
r
m
i
n
a
t
e
 
c
a
l
l
b
a
c
k


 
 
u
s
e
L
a
y
o
u
t
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
t
e
r
m
i
n
a
t
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
(
)
 
=
>
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
;


 
 
}
,
 
[
h
a
n
d
l
e
S
u
b
m
i
t
]
)
;




 
 
c
o
n
s
t
 
s
e
l
e
c
t
A
n
s
w
e
r
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
q
u
e
s
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
,
 
o
p
t
I
d
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
i
f
 
(
r
e
s
u
l
t
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
A
n
s
w
e
r
s
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
q
u
e
s
t
i
o
n
I
d
]
:
 
o
p
t
I
d
x
 
}
)
)
;


 
 
}
,
 
[
r
e
s
u
l
t
]
)
;


 
 
/
*


 
 
 
 
 
K
e
y
b
o
a
r
d
 
s
h
o
r
t
c
u
t
s
 
f
o
r
 
t
e
s
t
 
n
a
v
i
g
a
t
i
o
n
 
a
n
d
 
a
n
s
w
e
r
 
s
e
l
e
c
t
i
o
n
.


 
 
 
 
 
A
c
t
i
v
e
 
o
n
l
y
 
d
u
r
i
n
g
 
a
n
 
o
n
g
o
i
n
g
 
t
e
s
t
 


 
 
 
*
/


 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
i
f
 
(
!
s
t
a
r
t
e
d
 
|
|
 
r
e
s
u
l
t
)
 
r
e
t
u
r
n
;




 
c
o
n
s
t
 
h
a
n
d
l
e
K
e
y
D
o
w
n
 
=
 
(
e
v
e
n
t
:
 
K
e
y
b
o
a
r
d
E
v
e
n
t
)
 
=
>
 
{


 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
e
v
e
n
t
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
E
l
e
m
e
n
t
 
|
 
n
u
l
l
;




 
 
c
o
n
s
t
 
i
s
E
d
i
t
a
b
l
e
 
=


 
 
 
 
!
!
t
a
r
g
e
t
 
&
&


 
 
 
 
(
t
a
r
g
e
t
.
t
a
g
N
a
m
e
 
=
=
=
 
"
I
N
P
U
T
"
 
|
|


 
 
 
 
 
 
t
a
r
g
e
t
.
t
a
g
N
a
m
e
 
=
=
=
 
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
|


 
 
 
 
 
 
t
a
r
g
e
t
.
i
s
C
o
n
t
e
n
t
E
d
i
t
a
b
l
e
)
;




 
 
i
f
 
(


 
 
 
 
i
s
E
d
i
t
a
b
l
e
 
|
|


 
 
 
 
e
v
e
n
t
.
c
t
r
l
K
e
y
 
|
|


 
 
 
 
e
v
e
n
t
.
m
e
t
a
K
e
y
 
|
|


 
 
 
 
e
v
e
n
t
.
a
l
t
K
e
y


 
 
)
 
{


 
 
 
 
r
e
t
u
r
n
;


 
 
}




 
 
c
o
n
s
t
 
k
e
y
 
=
 
e
v
e
n
t
.
k
e
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
c
o
n
s
t
 
q
u
e
s
t
i
o
n
s
 
=
 
q
u
e
s
t
i
o
n
s
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
c
o
n
s
t
 
q
I
n
d
e
x
 
=
 
c
u
r
r
e
n
t
Q
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
 
=
 
q
u
e
s
t
i
o
n
s
[
q
I
n
d
e
x
]
;


 
 
 
 
i
f
 
(
!
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(


 
 
 
 
 
 
k
e
y
 
=
=
=
 
"
a
r
r
o
w
l
e
f
t
"
 
|
|


 
 
 
 
 
 
k
e
y
 
=
=
=
 
"
a
r
r
o
w
r
i
g
h
t
"
 
|
|


 
 
 
 
 
 
k
e
y
 
=
=
=
 
"
e
n
t
e
r
"
 
|
|


 
 
 
 
 
 
[
"
a
"
,
 
"
d
"
,
 
"
1
"
,
 
"
2
"
,
 
"
3
"
,
 
"
4
"
]
.
i
n
c
l
u
d
e
s
(
k
e
y
)


 
 
 
 
)
 
{


 
 
 
 
 
 
e
v
e
n
t
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
e
v
e
n
t
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
}




 
 
 
 
/
/
 
L
E
F
T


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
a
r
r
o
w
l
e
f
t
"
 
|
|
 
k
e
y
 
=
=
=
 
"
a
"
)
 
{


 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
Q
(
(
p
)
 
=
>
 
M
a
t
h
.
m
a
x
(
0
,
 
p
 
-
 
1
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
/
/
 
R
I
G
H
T


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
a
r
r
o
w
r
i
g
h
t
"
 
|
|
 
k
e
y
 
=
=
=
 
"
d
"
)
 
{


 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
Q
(
(
p
)
 
=
>
 
M
a
t
h
.
m
i
n
(
q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
-
 
1
,
 
p
 
+
 
1
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
/
/
 
O
P
T
I
O
N
S


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
1
"
)
 
s
e
l
e
c
t
A
n
s
w
e
r
(
c
u
r
r
e
n
t
.
i
d
,
 
0
)
;


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
2
"
)
 
s
e
l
e
c
t
A
n
s
w
e
r
(
c
u
r
r
e
n
t
.
i
d
,
 
1
)
;


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
3
"
)
 
s
e
l
e
c
t
A
n
s
w
e
r
(
c
u
r
r
e
n
t
.
i
d
,
 
2
)
;


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
4
"
)
 
s
e
l
e
c
t
A
n
s
w
e
r
(
c
u
r
r
e
n
t
.
i
d
,
 
3
)
;




 
 
 
 
/
/
 
E
N
T
E
R
 
→
 
o
n
l
y
 
m
o
v
e
 
i
f
 
a
n
s
w
e
r
 
e
x
i
s
t
s


 
 
 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
e
n
t
e
r
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
h
a
s
A
n
s
w
e
r
e
d
 
=
 
a
n
s
w
e
r
s
[
c
u
r
r
e
n
t
.
i
d
]
 
!
=
=
 
u
n
d
e
f
i
n
e
d
;


 
 
 
 
 
 
i
f
 
(
h
a
s
A
n
s
w
e
r
e
d
)
 
{


 
 
 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
Q
(
(
p
)
 
=
>
 
M
a
t
h
.
m
i
n
(
q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
-
 
1
,
 
p
 
+
 
1
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}
;




 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
K
e
y
D
o
w
n
,
 
t
r
u
e
)
;




 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
K
e
y
D
o
w
n
,
 
t
r
u
e
)
;


 
 
}
;


}
,
 
[
s
t
a
r
t
e
d
,
 
r
e
s
u
l
t
,
 
a
n
s
w
e
r
s
,
 
s
e
l
e
c
t
A
n
s
w
e
r
]
)
;




 
 
/
*
 
T
i
m
e
r
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




 
 
/
/
 
I
n
i
t
i
a
l
i
z
e
 
c
o
u
n
t
d
o
w
n
 
f
r
o
m
 
s
e
r
v
e
r
 
r
e
m
a
i
n
i
n
g
S
e
c
s
 
t
o
 
s
u
r
v
i
v
e
 
p
a
g
e
 
r
e
f
r
e
s
h


 
 
c
o
n
s
t
 
{
 
f
o
r
m
a
t
t
e
d
:
 
t
i
m
e
r
D
i
s
p
l
a
y
,
 
i
s
U
r
g
e
n
t
 
}
 
=
 
u
s
e
C
o
u
n
t
d
o
w
n
(


 
 
 
 
s
t
a
r
t
e
d
 
&
&
 
!
r
e
s
u
l
t
 
?
 
r
e
m
a
i
n
i
n
g
S
e
c
s
 
:
 
n
u
l
l
,


 
 
 
 
(
)
 
=
>
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
,


 
 
)
;




 
 
/
*
 
H
e
l
p
e
r
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
q
u
e
s
t
i
o
n
s
 
=
 
t
e
s
t
?
.
q
u
e
s
t
i
o
n
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
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
 
=
 
q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
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
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
a
n
s
w
e
r
s
)
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
a
l
l
A
n
s
w
e
r
e
d
 
=
 
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
 
=
=
=
 
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
 
&
&
 
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
 
>
 
0
;


 
 
c
o
n
s
t
 
c
u
r
r
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
 
=
 
q
u
e
s
t
i
o
n
s
[
c
u
r
r
e
n
t
Q
]
;




 
 
/
*
 
L
o
a
d
i
n
g
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
i
f
 
(
l
o
a
d
i
n
g
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
4
x
l
 
w
-
f
u
l
l
 
p
x
-
6
 
a
n
i
m
a
t
e
-
p
u
l
s
e
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
8
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
w
-
1
/
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
4
8
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
"
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
c
l
o
s
e
T
a
b
 
=
 
(
)
 
=
>
 
w
i
n
d
o
w
.
c
l
o
s
e
(
)
;




 
 
i
f
 
(
e
r
r
o
r
 
|
|
 
!
t
e
s
t
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
p
-
6
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
c
l
o
s
e
T
a
b
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
b
l
a
c
k
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
5
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
C
l
o
s
e


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
s
h
a
d
o
w
-
s
m
 
p
-
1
0
 
t
e
x
t
-
c
e
n
t
e
r
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
m
x
-
a
u
t
o
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
e
s
t
 
N
o
t
 
A
v
a
i
l
a
b
l
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>
{
e
r
r
o
r
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
/
*
 
C
a
m
e
r
a
 
g
a
t
e
 
-
 
v
e
r
i
f
y
 
c
a
m
e
r
a
 
a
c
c
e
s
s
 
b
e
f
o
r
e
 
s
h
o
w
i
n
g
 
t
e
s
t
 
i
n
f
o
 
-
-
-
-
-
-
-
 
*
/


 
 
i
f
 
(
!
s
t
a
r
t
e
d
 
&
&
 
!
c
a
m
e
r
a
R
e
a
d
y
)
 
{


 
 
 
 
c
o
n
s
t
 
r
e
q
u
e
s
t
C
a
m
e
r
a
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
C
a
m
e
r
a
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
e
a
m
 
=
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
m
e
d
i
a
D
e
v
i
c
e
s
.
g
e
t
U
s
e
r
M
e
d
i
a
(
{


 
 
 
 
 
 
 
 
 
 
v
i
d
e
o
:
 
t
r
u
e
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
s
t
r
e
a
m
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
t
r
e
a
m
;


 
 
 
 
 
 
 
 
i
f
 
(
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
 
 
 
 
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
.
s
r
c
O
b
j
e
c
t
 
=
 
s
t
r
e
a
m
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
s
e
t
C
a
m
e
r
a
R
e
a
d
y
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
/
/
 
S
t
o
p
 
t
h
e
 
p
r
e
v
i
e
w
 
s
t
r
e
a
m
 
-
 
p
r
o
c
t
o
r
i
n
g
 
c
a
m
e
r
a
 
c
o
m
p
o
n
e
n
t
 
w
i
l
l
 
s
t
a
r
t
 
i
t
s
 
o
w
n


 
 
 
 
 
 
 
 
s
t
r
e
a
m
.
g
e
t
T
r
a
c
k
s
(
)
.
f
o
r
E
a
c
h
(
(
t
)
 
=
>
 
t
.
s
t
o
p
(
)
)
;


 
 
 
 
 
 
 
 
s
t
r
e
a
m
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
 
=
 
e
r
r
 
a
s
 
{
 
n
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
 
m
e
s
s
a
g
e
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


 
 
 
 
 
 
 
 
l
e
t
 
m
s
g
:
 
s
t
r
i
n
g
;


 
 
 
 
 
 
 
 
i
f
 
(
e
?
.
n
a
m
e
 
=
=
=
 
"
N
o
t
A
l
l
o
w
e
d
E
r
r
o
r
"
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
o
l
i
c
y
 
=


 
 
 
 
 
 
 
 
 
 
 
 
e
?
.
m
e
s
s
a
g
e
?
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
"
p
e
r
m
i
s
s
i
o
n
s
 
p
o
l
i
c
y
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
e
?
.
m
e
s
s
a
g
e
?
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
"
f
e
a
t
u
r
e
 
p
o
l
i
c
y
"
)
;


 
 
 
 
 
 
 
 
 
 
m
s
g
 
=
 
i
s
P
o
l
i
c
y


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
C
a
m
e
r
a
 
i
s
 
b
l
o
c
k
e
d
 
b
y
 
a
 
s
i
t
e
 
s
e
c
u
r
i
t
y
 
p
o
l
i
c
y
.
 
T
h
i
s
 
i
s
 
a
 
k
n
o
w
n
 
i
s
s
u
e
 
—
 
p
l
e
a
s
e
 
c
o
n
t
a
c
t
 
s
u
p
p
o
r
t
.
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
C
a
m
e
r
a
 
p
e
r
m
i
s
s
i
o
n
 
d
e
n
i
e
d
.
 
P
l
e
a
s
e
 
a
l
l
o
w
 
c
a
m
e
r
a
 
a
c
c
e
s
s
 
i
n
 
y
o
u
r
 
b
r
o
w
s
e
r
 
s
e
t
t
i
n
g
s
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
e
?
.
n
a
m
e
 
=
=
=
 
"
N
o
t
F
o
u
n
d
E
r
r
o
r
"
)
 
{


 
 
 
 
 
 
 
 
 
 
m
s
g
 
=
 
"
N
o
 
c
a
m
e
r
a
 
d
e
t
e
c
t
e
d
.
 
P
l
e
a
s
e
 
c
o
n
n
e
c
t
 
a
 
c
a
m
e
r
a
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
e
?
.
n
a
m
e
 
=
=
=
 
"
N
o
t
R
e
a
d
a
b
l
e
E
r
r
o
r
"
)
 
{


 
 
 
 
 
 
 
 
 
 
m
s
g
 
=
 
"
C
a
m
e
r
a
 
i
s
 
i
n
 
u
s
e
 
b
y
 
a
n
o
t
h
e
r
 
a
p
p
.
 
P
l
e
a
s
e
 
c
l
o
s
e
 
i
t
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
m
s
g
 
=
 
"
C
a
m
e
r
a
 
n
o
t
 
a
v
a
i
l
a
b
l
e
.
 
P
l
e
a
s
e
 
c
h
e
c
k
 
y
o
u
r
 
d
e
v
i
c
e
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
s
e
t
C
a
m
e
r
a
E
r
r
o
r
(
m
s
g
)
;


 
 
 
 
 
 
}


 
 
 
 
}
;




 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
-
6
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
6
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
m
d
 
w
-
f
u
l
l
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
s
h
a
d
o
w
-
s
m
 
p
-
8
 
s
p
a
c
e
-
y
-
6
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
4
 
h
-
1
4
 
b
g
-
a
m
b
e
r
-
1
0
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
3
0
 
r
o
u
n
d
e
d
-
2
x
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
c
l
a
s
s
N
a
m
e
=
"
w
-
7
 
h
-
7
 
t
e
x
t
-
a
m
b
e
r
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
m
e
r
a
 
R
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
i
s
 
a
 
p
r
o
c
t
o
r
e
d
 
t
e
s
t
.
 
P
l
e
a
s
e
 
e
n
a
b
l
e
 
y
o
u
r
 
c
a
m
e
r
a
 
t
o
 
c
o
n
t
i
n
u
e
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
a
s
p
e
c
t
-
v
i
d
e
o
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
v
i
d
e
o


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
v
i
d
e
o
R
e
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
u
t
o
P
l
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
u
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
y
s
I
n
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
e
r
 
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
t
e
x
t
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
6
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
c
a
m
e
r
a
E
r
r
o
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
e
d
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
3
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
m
e
r
a
E
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
l
g
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
r
e
q
u
e
s
t
C
a
m
e
r
a
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
b
g
-
v
i
o
l
e
t
-
6
0
0
 
h
o
v
e
r
:
b
g
-
v
i
o
l
e
t
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
E
n
a
b
l
e
 
C
a
m
e
r
a
 
&
 
C
o
n
t
i
n
u
e


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
/
*
 
P
r
e
-
s
t
a
r
t
 
s
c
r
e
e
n
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
i
f
 
(
!
s
t
a
r
t
e
d
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
-
6
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
w
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
s
h
a
d
o
w
-
s
m
 
p
-
8
 
s
p
a
c
e
-
y
-
6
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
c
e
n
t
e
r
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
4
 
h
-
1
4
 
b
g
-
v
i
o
l
e
t
-
1
0
0
 
d
a
r
k
:
b
g
-
v
i
o
l
e
t
-
9
0
0
/
3
0
 
r
o
u
n
d
e
d
-
2
x
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
7
 
h
-
7
 
t
e
x
t
-
v
i
o
l
e
t
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
v
i
o
l
e
t
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
c
a
p
i
t
a
l
i
z
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
.
s
k
i
l
l
N
a
m
e
.
r
e
p
l
a
c
e
(
/
-
/
g
,
 
"
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
.
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
.
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
2
 
m
d
:
g
r
i
d
-
c
o
l
s
-
4
 
g
a
p
-
3
"
>


 
 
{
[


 
 
 
 
{


 
 
 
 
 
 
l
a
b
e
l
:
 
"
T
i
m
e
 
L
i
m
i
t
"
,


 
 
 
 
 
 
v
a
l
u
e
:
 
`
$
{
M
a
t
h
.
c
e
i
l
(
t
e
s
t
.
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
 
/
 
6
0
)
}
 
m
i
n
`
,


 
 
 
 
 
 
i
c
o
n
:
 
C
l
o
c
k
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
a
s
s
 
S
c
o
r
e
"
,


 
 
 
 
 
 
v
a
l
u
e
:
 
`
$
{
t
e
s
t
.
p
a
s
s
T
h
r
e
s
h
o
l
d
}
%
`
,


 
 
 
 
 
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
l
a
b
e
l
:
 
"
Q
u
e
s
t
i
o
n
s
"
,


 
 
 
 
 
 
v
a
l
u
e
:
 
t
e
s
t
.
q
u
e
s
t
i
o
n
s
P
e
r
S
e
s
s
i
o
n
 
?
?
 
"
—
"
,


 
 
 
 
 
 
i
c
o
n
:
 
F
i
l
e
T
e
x
t
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
l
a
b
e
l
:
 
"
B
e
s
t
 
A
t
t
e
m
p
t
"
,


 
 
 
 
 
 
v
a
l
u
e
:


 
 
t
e
s
t
.
b
e
s
t
A
t
t
e
m
p
t
?
.
s
c
o
r
e
 
!
=
=
 
u
n
d
e
f
i
n
e
d


 
 
 
 
?
 
`
$
{
t
e
s
t
.
b
e
s
t
A
t
t
e
m
p
t
.
s
c
o
r
e
}
%
`


 
 
 
 
:
 
"
—
"
,


 
 
 
 
 
 
i
c
o
n
:
 
T
r
o
p
h
y
,


 
 
 
 
}
,


 
 
]
.
m
a
p
(
(
i
t
e
m
)
 
=
>
 
(


 
 
 
 
<
d
i
v


 
 
 
 
 
 
k
e
y
=
{
i
t
e
m
.
l
a
b
e
l
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
3
 
t
e
x
t
-
c
e
n
t
e
r
"


 
 
 
 
>


 
 
 
 
 
 
<
i
t
e
m
.
i
c
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
x
-
a
u
t
o
 
m
b
-
1
"
 
/
>




 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
.
v
a
l
u
e
}


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
.
l
a
b
e
l
}


 
 
 
 
 
 
<
/
p
>


 
 
 
 
<
/
d
i
v
>


 
 
)
)
}


<
/
d
i
v
>
 
 


 
 
 
 
 
 
 
 
 
 
 
 
 




 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
.
e
x
i
s
t
i
n
g
V
e
r
i
f
i
c
a
t
i
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
g
r
e
e
n
-
5
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
e
e
n
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
3
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
 
f
o
n
t
-
m
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
l
r
e
a
d
y
 
v
e
r
i
f
i
e
d
 
w
i
t
h
 
{
t
e
s
t
.
e
x
i
s
t
i
n
g
V
e
r
i
f
i
c
a
t
i
o
n
.
s
c
o
r
e
}
%


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
c
o
r
e
.
 
Y
o
u
 
c
a
n
 
r
e
t
a
k
e
 
t
o
 
i
m
p
r
o
v
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
/
6
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
4
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
2
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
 
/
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
o
c
t
o
r
e
d
 
T
e
s
t
 
R
u
l
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
s
p
a
c
e
-
y
-
1
.
5
 
l
i
s
t
-
d
i
s
c
 
l
i
s
t
-
i
n
s
i
d
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
T
h
e
 
t
e
s
t
 
w
i
l
l
 
e
n
t
e
r
 
f
u
l
l
s
c
r
e
e
n
 
m
o
d
e
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
Y
o
u
r
 
c
a
m
e
r
a
 
w
i
l
l
 
b
e
 
a
c
t
i
v
e
 
f
o
r
 
f
a
c
e
 
d
e
t
e
c
t
i
o
n
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
e
v
T
o
o
l
s
,
 
r
i
g
h
t
-
c
l
i
c
k
,
 
c
o
p
y
/
p
a
s
t
e
,
 
a
n
d
 
s
c
r
e
e
n
s
h
o
t
s
 
a
r
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
3
 
t
a
b
 
s
w
i
t
c
h
e
s
 
w
i
l
l
 
a
u
t
o
-
s
u
b
m
i
t
 
y
o
u
r
 
t
e
s
t
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
e
a
v
i
n
g
 
f
u
l
l
s
c
r
e
e
n
 
f
o
r
 
1
0
+
 
s
e
c
o
n
d
s
 
w
i
l
l
 
a
u
t
o
-
s
u
b
m
i
t
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
P
r
i
n
t
i
n
g
 
a
n
d
 
t
e
x
t
 
d
r
a
g
g
i
n
g
 
a
r
e
 
b
l
o
c
k
e
d
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
l
o
s
i
n
g
 
t
h
e
 
t
a
b
 
d
u
r
i
n
g
 
t
h
e
 
t
e
s
t
 
i
s
 
b
l
o
c
k
e
d
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
p
r
o
c
t
o
r
 
l
o
g
 
a
n
d
 
i
n
t
e
g
r
i
t
y
 
s
c
o
r
e
 
a
r
e
 
v
i
s
i
b
l
e
 
t
o
 
r
e
c
r
u
i
t
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
t
r
y
A
f
t
e
r
 
&
&
 
n
e
w
 
D
a
t
e
(
)
 
<
 
r
e
t
r
y
A
f
t
e
r
 
?
 
(


 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
t
e
x
t
-
c
e
n
t
e
r
 
p
-
4
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
⏳
 
C
o
o
l
d
o
w
n
 
a
c
t
i
v
e
!
 
R
e
t
r
y
 
a
v
a
i
l
a
b
l
e
 
a
t
 
{
r
e
t
r
y
A
f
t
e
r
.
t
o
L
o
c
a
l
e
T
i
m
e
S
t
r
i
n
g
(
)
}


 
 
<
/
d
i
v
>


)
 
:
 
(


 
 
<
B
u
t
t
o
n


 
 
 
 
s
i
z
e
=
"
l
g
"


 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
S
t
a
r
t
}


 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
b
g
-
v
i
o
l
e
t
-
6
0
0
 
h
o
v
e
r
:
b
g
-
v
i
o
l
e
t
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
r
o
u
n
d
e
d
-
x
l
"


 
 
>


 
 
 
 
<
M
a
x
i
m
i
z
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
S
t
a
r
t
 
P
r
o
c
t
o
r
e
d
 
T
e
s
t


 
 
<
/
B
u
t
t
o
n
>


)
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
/
*
 
R
e
s
u
l
t
 
s
c
r
e
e
n
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
i
f
 
(
r
e
s
u
l
t
)
 
{


 
 
 
 
c
o
n
s
t
 
l
o
g
 
=
 
p
r
o
c
t
o
r
.
g
e
t
P
r
o
c
t
o
r
L
o
g
(
)
;


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
p
-
6
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
 
s
p
a
c
e
-
y
-
5
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
c
o
r
e
 
c
a
r
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
r
o
u
n
d
e
d
-
2
x
l
 
p
-
8
 
t
e
x
t
-
c
e
n
t
e
r
 
b
o
r
d
e
r
 
$
{
r
e
s
u
l
t
.
p
a
s
s
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
5
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
2
0
 
b
o
r
d
e
r
-
g
r
e
e
n
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
b
o
r
d
e
r
-
r
e
d
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
2
0
 
h
-
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
m
x
-
a
u
t
o
 
m
b
-
4
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
$
{
r
e
s
u
l
t
.
p
a
s
s
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
4
0
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
e
d
-
1
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
4
0
 
t
e
x
t
-
r
e
d
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
s
c
o
r
e
}
%


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
$
{
r
e
s
u
l
t
.
p
a
s
s
e
d
 
?
 
"
t
e
x
t
-
g
r
e
e
n
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
3
0
0
"
 
:
 
"
t
e
x
t
-
r
e
d
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
3
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
p
a
s
s
e
d
 
?
 
"
S
k
i
l
l
 
V
e
r
i
f
i
e
d
!
"
 
:
 
"
N
o
t
 
P
a
s
s
e
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
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
}
/
{
r
e
s
u
l
t
.
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
}
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
r
e
s
u
l
t
.
p
a
s
s
e
d
 
&
&
 
`
 
-
 
N
e
e
d
 
$
{
t
e
s
t
.
p
a
s
s
T
h
r
e
s
h
o
l
d
}
%
 
t
o
 
p
a
s
s
`
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
c
t
o
r
 
s
u
m
m
a
r
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
t
-
4
 
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
2
 
p
y
-
1
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
y
e
O
f
f
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
T
a
b
:
 
{
l
o
g
.
t
a
b
S
w
i
t
c
h
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
2
 
p
y
-
1
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
y
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
F
o
c
u
s
:
 
{
l
o
g
.
f
o
c
u
s
L
o
s
s
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
2
 
p
y
-
1
 
b
g
-
r
e
d
-
1
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
a
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
D
e
v
T
o
o
l
s
:
 
{
l
o
g
.
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
f
a
c
e
V
i
o
l
a
t
i
o
n
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
2
 
p
y
-
1
 
b
g
-
r
e
d
-
1
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
F
a
c
e
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
f
a
c
e
V
i
o
l
a
t
i
o
n
s
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
2
 
p
y
-
1
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
C
a
m
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
c
a
m
e
r
a
E
n
a
b
l
e
d
 
?
 
"
O
n
"
 
:
 
"
O
f
f
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
t
e
r
m
i
n
a
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
1
 
b
g
-
r
e
d
-
1
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
n
t
-
s
e
m
i
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
u
t
o
-
t
e
r
m
i
n
a
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
Q
u
e
s
t
i
o
n
 
r
e
v
i
e
w
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
 
R
e
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
{
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
q
I
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
r
a
d
e
d
 
=
 
r
e
s
u
l
t
.
g
r
a
d
e
d
A
n
s
w
e
r
s
.
f
i
n
d
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
g
)
 
=
>
 
g
.
q
u
e
s
t
i
o
n
I
d
 
=
=
=
 
q
.
i
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
q
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
p
-
4
 
s
p
a
c
e
-
y
-
2
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
r
-
1
"
>
{
q
I
d
x
 
+
 
1
}
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
.
m
a
p
(
(
o
p
t
,
 
o
p
t
I
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
e
l
e
c
t
e
d
 
=
 
g
r
a
d
e
d
?
.
s
e
l
e
c
t
e
d
I
n
d
e
x
 
=
=
=
 
o
p
t
I
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
r
r
e
c
t
 
=
 
g
r
a
d
e
d
?
.
c
o
r
r
e
c
t
 
&
&
 
i
s
S
e
l
e
c
t
e
d
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
W
r
o
n
g
 
=
 
!
g
r
a
d
e
d
?
.
c
o
r
r
e
c
t
 
&
&
 
i
s
S
e
l
e
c
t
e
d
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
p
t
I
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
x
s
 
b
o
r
d
e
r
 
$
{
i
s
C
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
g
r
e
e
n
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
7
0
0
 
b
g
-
g
r
e
e
n
-
5
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
2
0
 
t
e
x
t
-
g
r
e
e
n
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
W
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
7
0
0
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
t
e
x
t
-
r
e
d
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
w
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
O
P
T
I
O
N
_
L
A
B
E
L
S
[
o
p
t
I
d
x
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
o
p
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
d
e
d
?
.
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
l
g
 
p
-
2
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
d
e
d
.
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
3
 
p
t
-
2
 
p
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
l
g
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
c
l
o
s
e
T
a
b
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
C
l
o
s
e
 
T
a
b


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
{
!
r
e
s
u
l
t
.
p
a
s
s
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
r
y
A
f
t
e
r
 
&
&
 
n
e
w
 
D
a
t
e
(
)
 
<
 
r
e
t
r
y
A
f
t
e
r
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
t
e
x
t
-
c
e
n
t
e
r
 
p
-
3
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
⏳
 
R
e
t
r
y
 
a
v
a
i
l
a
b
l
e
 
a
t
 
{
r
e
t
r
y
A
f
t
e
r
.
t
o
L
o
c
a
l
e
T
i
m
e
S
t
r
i
n
g
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
l
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
s
u
l
t
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
A
n
s
w
e
r
s
(
{
}
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
Q
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
a
r
t
e
d
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
t
r
y
A
f
t
e
r
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
b
g
-
v
i
o
l
e
t
-
6
0
0
 
h
o
v
e
r
:
b
g
-
v
i
o
l
e
t
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
r
y
 
A
g
a
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
/
*
 
T
e
s
t
 
i
n
 
p
r
o
g
r
e
s
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
 
p
-
4
 
p
t
-
8
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
4
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
/
*
 
F
u
l
l
s
c
r
e
e
n
 
w
a
r
n
i
n
g
 
o
v
e
r
l
a
y
 
*
/
}


 
 
 
 
 
 
 
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
s
h
o
w
F
u
l
l
s
c
r
e
e
n
W
a
r
n
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
P
r
o
c
t
o
r
W
a
r
n
i
n
g
O
v
e
r
l
a
y


 
 
 
 
 
 
 
 
 
 
 
 
s
e
c
o
n
d
s
L
e
f
t
=
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
e
t
u
r
n
F
u
l
l
s
c
r
e
e
n
=
{
p
r
o
c
t
o
r
.
r
e
q
u
e
s
t
F
u
l
l
s
c
r
e
e
n
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
C
a
m
e
r
a
 
P
i
P
 
*
/
}


 
 
 
 
 
 
 
 
<
P
r
o
c
t
o
r
i
n
g
C
a
m
e
r
a


 
 
 
 
 
 
 
 
 
 
o
n
V
i
o
l
a
t
i
o
n
=
{
p
r
o
c
t
o
r
.
r
e
g
i
s
t
e
r
F
a
c
e
V
i
o
l
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
o
n
S
n
a
p
s
h
o
t
=
{
p
r
o
c
t
o
r
.
a
d
d
S
n
a
p
s
h
o
t
}


 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
=
{
(
e
r
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
`
C
a
m
e
r
a
:
 
$
{
e
r
r
}
`
)
;


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
c
t
o
r
.
s
e
t
C
a
m
e
r
a
E
n
a
b
l
e
d
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
o
n
R
e
a
d
y
=
{
(
)
 
=
>
 
p
r
o
c
t
o
r
.
s
e
t
C
a
m
e
r
a
E
n
a
b
l
e
d
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
{
/
*
 
S
t
i
c
k
y
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
t
i
c
k
y
 
t
o
p
-
0
 
z
-
1
0
 
b
g
-
w
h
i
t
e
/
8
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
m
d
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
-
m
x
-
4
 
p
x
-
4
 
p
y
-
3
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
m
a
x
-
w
-
4
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
a
b
 
s
w
i
t
c
h
 
i
n
d
i
c
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
t
a
b
S
w
i
t
c
h
e
s
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
1
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
m
d
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
y
e
O
f
f
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
t
a
b
S
w
i
t
c
h
e
s
}
/
3


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
D
e
v
T
o
o
l
s
 
i
n
d
i
c
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
1
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
m
d
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
a
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
a
c
e
 
v
i
o
l
a
t
i
o
n
 
i
n
d
i
c
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
f
a
c
e
V
i
o
l
a
t
i
o
n
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
1
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
m
d
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
c
t
o
r
.
s
t
a
t
e
.
f
a
c
e
V
i
o
l
a
t
i
o
n
s
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
g
r
e
s
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
2
 
p
y
-
1
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
m
d
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
}
/
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
i
m
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
$
{
i
s
U
r
g
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
m
e
r
D
i
s
p
l
a
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
H
o
r
i
z
o
n
t
a
l
 
q
u
e
s
t
i
o
n
 
n
a
v
i
g
a
t
o
r
 
-
 
a
t
 
t
o
p
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
 
m
b
-
5
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
q
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
C
u
r
r
e
n
t
Q
(
i
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
9
 
h
-
9
 
$
{
i
 
=
=
=
 
c
u
r
r
e
n
t
Q


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
v
i
o
l
e
t
-
6
0
0
 
t
e
x
t
-
w
h
i
t
e
 
s
h
a
d
o
w
-
s
m
 
h
o
v
e
r
:
b
g
-
v
i
o
l
e
t
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
a
n
s
w
e
r
s
[
q
.
i
d
]
 
!
=
=
 
u
n
d
e
f
i
n
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
3
0
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
C
u
r
r
e
n
t
 
q
u
e
s
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
u
r
r
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
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
s
h
a
d
o
w
-
s
m
 
p
-
6
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
r
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
Q
 
+
 
1
}
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
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
.
q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
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
.
o
p
t
i
o
n
s
.
m
a
p
(
(
o
p
t
,
 
o
p
t
I
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
e
l
e
c
t
e
d
 
=
 
a
n
s
w
e
r
s
[
c
u
r
r
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
.
i
d
]
 
=
=
=
 
o
p
t
I
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
p
t
I
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
l
e
c
t
A
n
s
w
e
r
(
c
u
r
r
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
.
i
d
,
 
o
p
t
I
d
x
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
u
t
o
H
e
i
g
h
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
j
u
s
t
i
f
y
-
s
t
a
r
t
 
g
a
p
-
3
 
p
y
-
3
.
5
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
l
e
f
t
 
$
{
i
s
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
v
i
o
l
e
t
-
4
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
v
i
o
l
e
t
-
5
0
0
 
b
g
-
v
i
o
l
e
t
-
5
0
 
d
a
r
k
:
b
g
-
v
i
o
l
e
t
-
9
0
0
/
2
0
 
t
e
x
t
-
v
i
o
l
e
t
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
v
i
o
l
e
t
-
2
0
0
 
r
i
n
g
-
1
 
r
i
n
g
-
v
i
o
l
e
t
-
2
0
0
 
d
a
r
k
:
r
i
n
g
-
v
i
o
l
e
t
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
7
 
h
-
7
 
r
o
u
n
d
e
d
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
s
h
r
i
n
k
-
0
 
b
o
r
d
e
r
 
$
{
i
s
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
v
i
o
l
e
t
-
4
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
v
i
o
l
e
t
-
5
0
0
 
b
g
-
v
i
o
l
e
t
-
5
0
0
 
t
e
x
t
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
O
P
T
I
O
N
_
L
A
B
E
L
S
[
o
p
t
I
d
x
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
"
>
{
o
p
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
a
v
i
g
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
t
-
5
 
p
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
C
u
r
r
e
n
t
Q
(
(
p
)
 
=
>
 
M
a
t
h
.
m
a
x
(
0
,
 
p
 
-
 
1
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
c
u
r
r
e
n
t
Q
 
=
=
=
 
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
L
e
f
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
P
r
e
v
i
o
u
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
Q
 
=
=
=
 
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
 
-
 
1
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
a
l
l
A
n
s
w
e
r
e
d
 
|
|
 
s
u
b
m
i
t
t
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
g
r
e
e
n
-
6
0
0
 
h
o
v
e
r
:
b
g
-
g
r
e
e
n
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
t
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
S
u
b
m
i
t
t
i
n
g
.
.
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
u
b
m
i
t
 
T
e
s
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
a
l
l
A
n
s
w
e
r
e
d
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
`
 
(
$
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
 
-
 
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
}
 
u
n
a
n
s
w
e
r
e
d
)
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
Q
(
(
p
)
 
=
>
 
M
a
t
h
.
m
i
n
(
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
 
-
 
1
,
 
p
 
+
 
1
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
v
i
o
l
e
t
-
6
0
0
 
h
o
v
e
r
:
b
g
-
v
i
o
l
e
t
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t
 
<
C
h
e
v
r
o
n
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


