
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
S
t
a
t
e
,
 
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
Q
u
e
r
y
,
 
k
e
e
p
P
r
e
v
i
o
u
s
D
a
t
a
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
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
o
o
k
O
p
e
n
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
 
{
 
F
o
o
t
e
r
 
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
F
o
o
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
 
{
 
q
u
e
r
y
K
e
y
s
 
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
l
i
b
/
q
u
e
r
y
-
k
e
y
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
 
N
a
v
b
a
r
 
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
N
a
v
b
a
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
 
S
E
O
 
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
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
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
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;




i
m
p
o
r
t
 
B
l
o
g
C
a
r
d
,
 
{


 
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
,


}
 
f
r
o
m
 
"
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
B
l
o
g
C
a
r
d
"
;




i
m
p
o
r
t
 
B
l
o
g
H
e
r
o
 
f
r
o
m
 
"
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
B
l
o
g
H
e
r
o
"
;


i
m
p
o
r
t
 
B
l
o
g
S
k
e
l
e
t
o
n
 
f
r
o
m
 
"
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
B
l
o
g
S
k
e
l
e
t
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
 
E
m
p
t
y
S
t
a
t
e
 
f
r
o
m
 
"
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
E
m
p
t
y
S
t
a
t
e
"
;


i
m
p
o
r
t
 
F
e
a
t
u
r
e
d
C
a
r
o
u
s
e
l
 
f
r
o
m
 
"
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
F
e
a
t
u
r
e
d
C
a
r
o
u
s
e
l
"
;


i
m
p
o
r
t
 
C
a
t
e
g
o
r
y
P
i
l
l
s
 
f
r
o
m
 
"
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
C
a
t
e
g
o
r
y
P
i
l
l
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
y
p
e
 
{


 
 
B
l
o
g
P
o
s
t
,


 
 
B
l
o
g
C
a
t
e
g
o
r
y
,


 
 
P
a
g
i
n
a
t
i
o
n
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
 
B
l
o
g
L
i
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
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
"
"
)
;


 
 
c
o
n
s
t
 
[
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
,
 
s
e
t
D
e
b
o
u
n
c
e
d
S
e
a
r
c
h
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
"
"
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
t
e
g
o
r
y
,
 
s
e
t
C
a
t
e
g
o
r
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
<
B
l
o
g
C
a
t
e
g
o
r
y
 
|
 
"
A
L
L
"
>
(
"
A
L
L
"
)
;


 
 
c
o
n
s
t
 
[
p
a
g
e
,
 
s
e
t
P
a
g
e
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
1
)
;




 
 
c
o
n
s
t
 
l
i
m
i
t
 
=
 
9
;




 
 
/
/
 
D
e
b
o
u
n
c
e
 
s
e
a
r
c
h


 
 
c
o
n
s
t
 
t
i
m
e
r
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
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
T
i
m
e
o
u
t
>
 
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
 
h
a
n
d
l
e
S
e
a
r
c
h
C
h
a
n
g
e
 
=
 
(
v
a
l
u
e
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
a
r
c
h
(
v
a
l
u
e
)
;




 
 
 
 
i
f
 
(
t
i
m
e
r
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


 
 
 
 
 
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
i
m
e
r
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
;


 
 
 
 
}




 
 
 
 
t
i
m
e
r
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
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
D
e
b
o
u
n
c
e
d
S
e
a
r
c
h
(
v
a
l
u
e
)
;


 
 
 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
 
 
}
,
 
4
0
0
)
;


 
 
}
;




 
 
/
/
 
C
l
e
a
n
u
p
 
d
e
b
o
u
n
c
e
 
t
i
m
e
r


 
 
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


 
 
 
 
 
 
i
f
 
(
t
i
m
e
r
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


 
 
 
 
 
 
 
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
i
m
e
r
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
;


 
 
 
 
 
 
}


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
/
/
 
F
e
t
c
h
 
b
l
o
g
 
p
o
s
t
s


 
 
c
o
n
s
t
 
{


 
 
 
 
d
a
t
a
,


 
 
 
 
i
s
L
o
a
d
i
n
g
,


 
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
{


 
 
 
 
p
o
s
t
s
:
 
B
l
o
g
P
o
s
t
[
]
;


 
 
 
 
p
a
g
i
n
a
t
i
o
n
:
 
P
a
g
i
n
a
t
i
o
n
;


 
 
}
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
b
l
o
g
.
l
i
s
t
(
{


 
 
 
 
 
 
p
a
g
e
,


 
 
 
 
 
 
l
i
m
i
t
,


 
 
 
 
 
 
c
a
t
e
g
o
r
y
,


 
 
 
 
 
 
s
e
a
r
c
h
:
 
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
,


 
 
 
 
}
)
,




 
 
 
 
q
u
e
r
y
F
n
:
 
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


 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
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
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
>
 
=
 
{


 
 
 
 
 
 
 
 
p
a
g
e
,


 
 
 
 
 
 
 
 
l
i
m
i
t
,


 
 
 
 
 
 
}
;




 
 
 
 
 
 
i
f
 
(
c
a
t
e
g
o
r
y
 
!
=
=
 
"
A
L
L
"
)
 
{


 
 
 
 
 
 
 
 
p
a
r
a
m
s
.
c
a
t
e
g
o
r
y
 
=
 
c
a
t
e
g
o
r
y
;


 
 
 
 
 
 
}




 
 
 
 
 
 
i
f
 
(
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
)
 
{


 
 
 
 
 
 
 
 
p
a
r
a
m
s
.
s
e
a
r
c
h
 
=
 
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
;


 
 
 
 
 
 
}




 
 
 
 
 
 
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
g
e
t
(
"
/
b
l
o
g
"
,
 
{
 
p
a
r
a
m
s
 
}
)
;




 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
;


 
 
 
 
}
,




 
 
 
 
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
D
a
t
a
:
 
k
e
e
p
P
r
e
v
i
o
u
s
D
a
t
a
,


 
 
}
)
;




 
 
/
/
 
F
e
a
t
u
r
e
d
 
p
o
s
t
s


 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
f
e
a
t
u
r
e
d
D
a
t
a
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
{


 
 
 
 
p
o
s
t
s
:
 
B
l
o
g
P
o
s
t
[
]
;


 
 
}
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
b
l
o
g
.
f
e
a
t
u
r
e
d
(
)
,




 
 
 
 
q
u
e
r
y
F
n
:
 
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
g
e
t
(
"
/
b
l
o
g
/
f
e
a
t
u
r
e
d
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
p
o
s
t
s
 
=
 
d
a
t
a
?
.
p
o
s
t
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
 
p
a
g
i
n
a
t
i
o
n
 
=
 
d
a
t
a
?
.
p
a
g
i
n
a
t
i
o
n
;


 
 
c
o
n
s
t
 
f
e
a
t
u
r
e
d
P
o
s
t
s
 
=
 
f
e
a
t
u
r
e
d
D
a
t
a
?
.
p
o
s
t
s
 
?
?
 
[
]
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
f
o
n
t
-
s
a
n
s
 
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
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
a
r
e
e
r
 
A
d
v
i
c
e
 
B
l
o
g
 
|
 
I
n
t
e
r
v
i
e
w
 
T
i
p
s
,
 
R
e
s
u
m
e
 
G
u
i
d
e
s
 
&
 
J
o
b
 
S
e
a
r
c
h
"


 
 
 
 
 
 
 
 
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
=
"
P
r
a
c
t
i
c
a
l
 
g
u
i
d
e
s
 
o
n
 
r
e
s
u
m
e
 
w
r
i
t
i
n
g
,
 
t
e
c
h
n
i
c
a
l
 
i
n
t
e
r
v
i
e
w
s
,
 
s
a
l
a
r
y
 
n
e
g
o
t
i
a
t
i
o
n
,
 
a
n
d
 
i
n
t
e
r
n
s
h
i
p
 
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
.
 
U
p
d
a
t
e
d
 
w
e
e
k
l
y
 
f
o
r
 
s
t
u
d
e
n
t
s
 
a
n
d
 
e
a
r
l
y
-
c
a
r
e
e
r
 
e
n
g
i
n
e
e
r
s
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
c
a
r
e
e
r
 
b
l
o
g
,
 
i
n
t
e
r
v
i
e
w
 
t
i
p
s
,
 
s
a
l
a
r
y
 
g
u
i
d
e
,
 
r
e
s
u
m
e
 
t
i
p
s
,
 
t
e
c
h
 
t
r
e
n
d
s
,
 
c
a
r
e
e
r
 
a
d
v
i
c
e
,
 
i
n
d
u
s
t
r
y
 
i
n
s
i
g
h
t
s
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
b
l
o
g
"
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
N
a
v
b
a
r
 
s
t
a
y
s
 
f
u
l
l
-
w
i
d
t
h
 
a
t
 
t
h
e
 
v
e
r
y
 
t
o
p
 
*
/
}


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>




 
 
 
 
 
 
{
/
*
 
M
a
i
n
 
c
o
n
t
e
n
t
 
b
o
d
y
 
w
r
a
p
p
e
r
 
*
/
}


 
 
 
 
 
 
<
m
a
i
n
>


 
 
 
 
 
 
 
 
{
/
*
 
H
e
r
o
 
B
a
n
n
e
r
 
A
r
e
a
 
*
/
}


 
 
 
 
 
 
 
 
<
s
e
c
t
i
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
r
e
l
a
t
i
v
e
 
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
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
p
x
-
6
 
p
y
-
1
4
 
m
d
:
p
x
-
1
0
 
m
d
:
p
y
-
2
0
"
>


 
 
 
 
 
 
 
 
 
 
<
B
l
o
g
H
e
r
o
 
s
e
a
r
c
h
=
{
s
e
a
r
c
h
}
 
s
e
t
S
e
a
r
c
h
=
{
h
a
n
d
l
e
S
e
a
r
c
h
C
h
a
n
g
e
}
 
/
>


 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
{
/
*
 
A
r
t
i
c
l
e
s
 
F
e
e
d
 
C
o
n
t
e
n
t
 
C
o
n
t
a
i
n
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
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
m
t
-
6
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
a
t
e
g
o
r
y
 
P
i
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
C
a
t
e
g
o
r
y
P
i
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
e
d
=
{
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
v
a
l
u
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
a
t
e
g
o
r
y
(
v
a
l
u
e
 
a
s
 
B
l
o
g
C
a
t
e
g
o
r
y
 
|
 
"
A
L
L
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
e
a
t
u
r
e
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
f
e
a
t
u
r
e
d
P
o
s
t
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


 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
 
=
=
=
 
"
A
L
L
"
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
!
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
p
a
g
e
 
=
=
=
 
1
 
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
m
b
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
e
a
t
u
r
e
d
C
a
r
o
u
s
e
l
 
p
o
s
t
s
=
{
f
e
a
t
u
r
e
d
P
o
s
t
s
.
s
l
i
c
e
(
0
,
 
3
)
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
l
o
g
 
G
r
i
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
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
m
b
-
1
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
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
o
k
O
p
e
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
5
 
h
-
5
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
0
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
t
e
g
o
r
y
 
=
=
=
 
"
A
L
L
"
 
?
 
"
A
l
l
 
A
r
t
i
c
l
e
s
"
 
:
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
[
c
a
t
e
g
o
r
y
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
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
s
m
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
0
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
}
 
a
r
t
i
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
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
1
 
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
2
 
l
g
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
3
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
6
 
}
)
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
l
o
g
S
k
e
l
e
t
o
n
 
k
e
y
=
{
i
}
 
/
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
p
o
s
t
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
m
p
t
y
S
t
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
o
 
a
r
t
i
c
l
e
s
 
f
o
u
n
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
N
o
 
r
e
s
u
l
t
s
 
f
o
r
 
"
$
{
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
}
"
.
 
T
r
y
 
a
 
d
i
f
f
e
r
e
n
t
 
s
e
a
r
c
h
 
t
e
r
m
.
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
N
o
 
a
r
t
i
c
l
e
s
 
i
n
 
t
h
i
s
 
c
a
t
e
g
o
r
y
 
y
e
t
.
 
C
h
e
c
k
 
b
a
c
k
 
s
o
o
n
!
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
1
 
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
2
 
l
g
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
3
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
o
s
t
s
.
m
a
p
(
(
p
o
s
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
l
o
g
C
a
r
d
 
k
e
y
=
{
p
o
s
t
.
i
d
}
 
p
o
s
t
=
{
p
o
s
t
}
 
i
n
d
e
x
=
{
i
}
 
/
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
a
g
i
n
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
 
&
&
 
p
a
g
i
n
a
t
i
o
n
.
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
 
>
 
1
 
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
 
g
a
p
-
3
 
m
t
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
P
a
g
e
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
1
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
p
a
g
e
 
<
=
 
1
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
 
p
x
-
4
 
p
y
-
2
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
s
m
 
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
s
t
o
n
e
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
/
5
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
s
t
o
n
e
-
5
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
s
t
o
n
e
-
8
0
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
-
c
o
l
o
r
s
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
b
u
t
t
o
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
p
x
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
a
g
e
 
{
p
a
g
i
n
a
t
i
o
n
.
p
a
g
e
}
 
o
f
 
{
p
a
g
i
n
a
t
i
o
n
.
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
P
a
g
e
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
p
a
g
i
n
a
t
i
o
n
.
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
,
 
p
 
+
 
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
p
a
g
e
 
>
=
 
p
a
g
i
n
a
t
i
o
n
.
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
 
p
x
-
4
 
p
y
-
2
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
s
m
 
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
s
t
o
n
e
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
/
5
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
s
t
o
n
e
-
5
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
s
t
o
n
e
-
8
0
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
-
c
o
l
o
r
s
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
b
u
t
t
o
n
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
/
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
a
i
n
>




 
 
 
 
 
 
{
/
*
 
F
o
o
t
e
r
 
s
t
a
y
s
 
f
u
l
l
-
w
i
d
t
h
 
a
t
 
t
h
e
 
v
e
r
y
 
b
o
t
t
o
m
 
*
/
}


 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
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


