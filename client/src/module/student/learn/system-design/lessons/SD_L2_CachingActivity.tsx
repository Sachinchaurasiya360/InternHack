
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


 
 
Z
a
p
,
 
C
l
o
c
k
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
 
L
a
y
e
r
s
,
 
R
e
f
r
e
s
h
C
w
,
 
T
r
a
s
h
2
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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
D
,


 
 
S
D
_
S
O
F
T
,


 
 
M
O
N
O
,


 
 
s
e
c
t
i
o
n
T
i
t
l
e
,


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
,


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




c
o
n
s
t
 
O
K
 
=
 
"
#
1
0
b
9
8
1
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
H
i
t
 
v
s
 
M
i
s
s
 
s
i
m
u
l
a
t
o
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
R
e
q
 
=
 
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
 
k
e
y
:
 
s
t
r
i
n
g
;
 
h
i
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
 
m
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
o
n
s
t
 
K
E
Y
S
 
=
 
[
"
u
s
e
r
:
4
2
"
,
 
"
p
o
s
t
:
7
"
,
 
"
f
e
e
d
:
h
o
m
e
"
,
 
"
u
s
e
r
:
4
2
"
,
 
"
u
s
e
r
:
9
9
"
,
 
"
p
o
s
t
:
7
"
,
 
"
f
e
e
d
:
h
o
m
e
"
,
 
"
u
s
e
r
:
4
2
"
]
;




f
u
n
c
t
i
o
n
 
H
i
t
M
i
s
s
(
)
 
{


 
 
c
o
n
s
t
 
[
c
a
c
h
e
,
 
s
e
t
C
a
c
h
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
<
S
e
t
<
s
t
r
i
n
g
>
>
(
n
e
w
 
S
e
t
(
)
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
q
s
,
 
s
e
t
R
e
q
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
q
[
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
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
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
 
i
d
x
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


 
 
c
o
n
s
t
 
n
e
x
t
I
d
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
1
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
r
u
n
n
i
n
g
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
 
t
 
=
 
w
i
n
d
o
w
.
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


 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
K
E
Y
S
[
i
d
x
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
 
%
 
K
E
Y
S
.
l
e
n
g
t
h
]
;


 
 
 
 
 
 
i
d
x
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
 
+
=
 
1
;




 
 
 
 
 
 
s
e
t
C
a
c
h
e
(
(
p
r
e
v
C
a
c
h
e
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
n
C
a
c
h
e
 
=
 
p
r
e
v
C
a
c
h
e
.
h
a
s
(
k
e
y
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
i
t
 
=
 
i
n
C
a
c
h
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
a
t
e
n
c
y
H
i
t
 
=
 
1
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
3
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
a
t
e
n
c
y
M
i
s
s
 
=
 
6
0
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
8
0
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
s
 
=
 
h
i
t
 
?
 
l
a
t
e
n
c
y
H
i
t
 
:
 
l
a
t
e
n
c
y
M
i
s
s
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
q
:
 
R
e
q
 
=
 
{
 
i
d
:
 
n
e
x
t
I
d
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
+
+
,
 
k
e
y
,
 
h
i
t
,
 
m
s
 
}
;


 
 
 
 
 
 
 
 
s
e
t
R
e
q
s
(
(
p
r
e
v
R
e
q
s
)
 
=
>
 
[
r
e
q
,
 
.
.
.
p
r
e
v
R
e
q
s
]
.
s
l
i
c
e
(
0
,
 
1
0
)
)
;




 
 
 
 
 
 
 
 
i
f
 
(
!
i
n
C
a
c
h
e
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
C
a
c
h
e
)
;


 
 
 
 
 
 
 
 
 
 
n
e
x
t
.
a
d
d
(
k
e
y
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
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
C
a
c
h
e
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
7
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
 
w
i
n
d
o
w
.
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
t
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
]
)
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
C
o
u
n
t
 
=
 
r
e
q
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
 
h
i
t
C
o
u
n
t
 
=
 
r
e
q
s
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
h
i
t
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
v
g
L
a
t
e
n
c
y
 
=
 
t
o
t
a
l
C
o
u
n
t
 
=
=
=
 
0
 
?
 
0
 
:
 
M
a
t
h
.
r
o
u
n
d
(
r
e
q
s
.
r
e
d
u
c
e
(
(
s
,
 
r
)
 
=
>
 
s
 
+
 
r
.
m
s
,
 
0
)
 
/
 
t
o
t
a
l
C
o
u
n
t
)
;


 
 
c
o
n
s
t
 
o
b
s
e
r
v
e
d
H
i
t
 
=
 
t
o
t
a
l
C
o
u
n
t
 
=
=
=
 
0
 
?
 
0
 
:
 
M
a
t
h
.
r
o
u
n
d
(
(
h
i
t
C
o
u
n
t
 
/
 
t
o
t
a
l
C
o
u
n
t
)
 
*
 
1
0
0
)
;




 
 
f
u
n
c
t
i
o
n
 
c
l
e
a
r
A
l
l
(
)
 
{


 
 
 
 
s
e
t
C
a
c
h
e
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
s
e
t
R
e
q
s
(
[
]
)
;


 
 
 
 
i
d
x
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
 
0
;


 
 
}




 
 
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
C
a
c
h
e
 
h
i
t
 
=
 
f
a
s
t
.
 
C
a
c
h
e
 
m
i
s
s
 
=
 
s
l
o
w
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
 
c
a
c
h
e
 
s
i
t
s
 
i
n
 
f
r
o
n
t
 
o
f
 
t
h
e
 
s
l
o
w
 
s
t
o
r
e
 
(
d
a
t
a
b
a
s
e
,
 
A
P
I
,
 
d
i
s
k
)
.
 
I
f
 
t
h
e
 
d
a
t
a
 
i
s
 
t
h
e
r
e


 
 
 
 
 
 
 
 
(
h
i
t
)
,
 
y
o
u
 
a
n
s
w
e
r
 
i
n
 
m
i
c
r
o
s
e
c
o
n
d
s
.
 
I
f
 
n
o
t
 
(
m
i
s
s
)
,
 
y
o
u
 
g
o
 
a
l
l
 
t
h
e
 
w
a
y
 
t
o
 
t
h
e
 
s
l
o
w
 
p
a
t
h


 
 
 
 
 
 
 
 
a
n
d
 
c
o
m
e
 
b
a
c
k
 
w
i
t
h
 
t
h
e
 
a
n
s
w
e
r
 
-
 
a
n
d
 
u
s
u
a
l
l
y
 
c
a
c
h
e
 
i
t
 
f
o
r
 
n
e
x
t
 
t
i
m
e
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
o
l
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
8
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
6
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
 
}
}
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
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
r
u
n
n
i
n
g
 
?
 
S
D
 
:
 
O
K
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
r
u
n
n
i
n
g
 
?
 
S
D
_
S
O
F
T
 
:
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
0
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
r
u
n
n
i
n
g
 
?
 
S
D
 
:
 
O
K
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
P
a
u
s
e
 
t
r
a
f
f
i
c
"
 
:
 
"
S
t
a
r
t
 
t
r
a
f
f
i
c
"
}


 
 
 
 
 
 
 
 
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
c
l
e
a
r
A
l
l
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
6
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
C
l
e
a
r
 
c
a
c
h
e


 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
r
o
w
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
H
I
T
 
R
A
T
E
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
4
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
o
b
s
e
r
v
e
d
H
i
t
 
>
=
 
7
0
 
?
 
O
K
 
:
 
o
b
s
e
r
v
e
d
H
i
t
 
>
=
 
4
0
 
?
 
W
A
R
N
 
:
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
o
b
s
e
r
v
e
d
H
i
t
}
%


 
 
 
 
 
 
 
 
 
 
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
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
A
V
G
 
L
A
T
E
N
C
Y
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
4
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
a
v
g
L
a
t
e
n
c
y
 
<
 
2
0
 
?
 
O
K
 
:
 
a
v
g
L
a
t
e
n
c
y
 
<
 
6
0
 
?
 
W
A
R
N
 
:
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
v
g
L
a
t
e
n
c
y
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
5
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
L
e
f
t
:
 
3
 
}
}
>
m
s
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


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
C
A
C
H
E
 
S
I
Z
E
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
4
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
P
U
R
P
L
E
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
c
h
e
.
s
i
z
e
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
5
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
L
e
f
t
:
 
3
 
}
}
>
k
e
y
s
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
 
R
e
q
u
e
s
t
 
l
o
g
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
1
4
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
C
E
N
T
 
R
E
Q
U
E
S
T
S


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
r
e
q
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
0
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
s
s
 
&
l
d
q
u
o
;
S
t
a
r
t
 
t
r
a
f
f
i
c
&
r
d
q
u
o
;
 
t
o
 
b
e
g
i
n
.


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
r
e
q
s
.
m
a
p
(
(
r
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
r
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
0
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
d
a
s
h
e
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
W
i
d
t
h
:
 
5
6
,
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
r
.
h
i
t
 
?
 
O
K
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
r
.
h
i
t
 
?
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
2
)
"
 
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
h
i
t
 
?
 
"
H
I
T
"
 
:
 
"
M
I
S
S
"
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
l
e
x
:
 
1
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
E
T
 
{
r
.
k
e
y
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
c
o
l
o
r
:
 
r
.
h
i
t
 
?
 
O
K
 
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
m
s
}
m
s


 
 
 
 
 
 
 
 
 
 
 
 
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
)
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
0
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
5
 
h
-
5
 
s
h
r
i
n
k
-
0
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
W
h
y
 
s
e
n
i
o
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
 
o
b
s
e
s
s
 
o
v
e
r
 
h
i
t
 
r
a
t
e
:
<
/
b
>
 
a
 
5
m
s
 
c
a
c
h
e
 
+
 
1
0
0
m
s
 
D
B
 
a
t
 
9
0
%
 
h
i
t


 
 
 
 
 
 
 
 
 
 
r
a
t
e
 
a
v
e
r
a
g
e
s
 
<
b
>
~
1
4
.
5
m
s
<
/
b
>
.
 
D
r
o
p
 
h
i
t
 
r
a
t
e
 
t
o
 
5
0
%
 
a
n
d
 
y
o
u
&
r
s
q
u
o
;
r
e
 
a
t
 
<
b
>
~
5
2
.
5
m
s
<
/
b
>
 
-


 
 
 
 
 
 
 
 
 
 
a
l
m
o
s
t
 
4
&
t
i
m
e
s
;
 
s
l
o
w
e
r
.
 
S
m
a
l
l
 
%
 
c
h
a
n
g
e
s
 
c
a
u
s
e
 
h
u
g
e
 
l
a
t
e
n
c
y
 
s
h
i
f
t
s
.


 
 
 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
W
h
e
r
e
 
t
o
 
p
u
t
 
a
 
c
a
c
h
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
L
a
y
e
r
 
=
 
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


 
 
w
h
e
r
e
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
t
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
;


 
 
e
x
a
m
p
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
l
o
r
:
 
s
t
r
i
n
g
;


 
 
t
r
a
d
e
o
f
f
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




c
o
n
s
t
 
L
A
Y
E
R
S
:
 
L
a
y
e
r
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
b
r
o
w
s
e
r
"
,


 
 
 
 
n
a
m
e
:
 
"
B
r
o
w
s
e
r
 
c
a
c
h
e
"
,


 
 
 
 
w
h
e
r
e
:
 
"
O
n
 
t
h
e
 
u
s
e
r
'
s
 
d
e
v
i
c
e
"
,


 
 
 
 
l
a
t
e
n
c
y
:
 
"
~
0
m
s
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
C
a
c
h
e
-
C
o
n
t
r
o
l
 
h
e
a
d
e
r
s
,
 
S
e
r
v
i
c
e
 
W
o
r
k
e
r
s
"
,


 
 
 
 
c
o
l
o
r
:
 
O
K
,


 
 
 
 
t
r
a
d
e
o
f
f
:
 
"
F
a
s
t
e
s
t
 
p
o
s
s
i
b
l
e
 
-
 
b
u
t
 
y
o
u
 
h
a
v
e
 
z
e
r
o
 
c
o
n
t
r
o
l
 
o
n
c
e
 
s
e
n
t
.
 
M
i
s
t
a
k
e
s
 
l
i
v
e
 
i
n
 
u
s
e
r
s
'
 
b
r
o
w
s
e
r
s
 
u
n
t
i
l
 
t
h
e
 
T
T
L
 
e
x
p
i
r
e
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
d
n
"
,


 
 
 
 
n
a
m
e
:
 
"
C
D
N
 
e
d
g
e
 
c
a
c
h
e
"
,


 
 
 
 
w
h
e
r
e
:
 
"
A
t
 
a
 
P
O
P
 
c
l
o
s
e
 
t
o
 
t
h
e
 
u
s
e
r
"
,


 
 
 
 
l
a
t
e
n
c
y
:
 
"
~
1
0
-
5
0
m
s
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
C
l
o
u
d
f
l
a
r
e
,
 
F
a
s
t
l
y
,
 
C
l
o
u
d
F
r
o
n
t
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
t
r
a
d
e
o
f
f
:
 
"
G
r
e
a
t
 
f
o
r
 
s
t
a
t
i
c
 
a
s
s
e
t
s
 
a
n
d
 
i
m
a
g
e
s
.
 
I
n
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
 
a
c
r
o
s
s
 
2
0
0
+
 
e
d
g
e
 
l
o
c
a
t
i
o
n
s
 
i
s
 
t
h
e
 
t
r
i
c
k
y
 
p
a
r
t
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
a
p
p
"
,


 
 
 
 
n
a
m
e
:
 
"
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
 
/
 
i
n
-
m
e
m
o
r
y
 
c
a
c
h
e
"
,


 
 
 
 
w
h
e
r
e
:
 
"
I
n
s
i
d
e
 
e
a
c
h
 
a
p
p
 
s
e
r
v
e
r
"
,


 
 
 
 
l
a
t
e
n
c
y
:
 
"
~
0
.
1
m
s
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
l
o
c
a
l
 
M
a
p
,
 
C
a
f
f
e
i
n
e
,
 
l
r
u
-
c
a
c
h
e
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
t
r
a
d
e
o
f
f
:
 
"
F
a
s
t
e
s
t
 
s
e
r
v
e
r
-
s
i
d
e
 
o
p
t
i
o
n
.
 
B
u
t
 
e
a
c
h
 
s
e
r
v
e
r
 
h
a
s
 
i
t
s
 
o
w
n
 
c
o
p
y
 
→
 
s
t
a
l
e
 
d
a
t
a
,
 
w
a
s
t
e
d
 
m
e
m
o
r
y
,
 
h
a
r
d
 
t
o
 
i
n
v
a
l
i
d
a
t
e
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
i
s
t
r
i
b
u
t
e
d
"
,


 
 
 
 
n
a
m
e
:
 
"
D
i
s
t
r
i
b
u
t
e
d
 
c
a
c
h
e
"
,


 
 
 
 
w
h
e
r
e
:
 
"
S
e
p
a
r
a
t
e
 
c
l
u
s
t
e
r
,
 
s
h
a
r
e
d
 
b
y
 
a
l
l
 
a
p
p
 
s
e
r
v
e
r
s
"
,


 
 
 
 
l
a
t
e
n
c
y
:
 
"
~
1
-
5
m
s
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
R
e
d
i
s
,
 
M
e
m
c
a
c
h
e
d
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
t
r
a
d
e
o
f
f
:
 
"
T
h
e
 
w
o
r
k
h
o
r
s
e
 
o
f
 
m
o
d
e
r
n
 
b
a
c
k
e
n
d
s
.
 
O
n
e
 
s
o
u
r
c
e
 
o
f
 
t
r
u
t
h
,
 
e
a
s
y
 
t
o
 
i
n
v
a
l
i
d
a
t
e
.
 
A
d
d
s
 
a
 
n
e
t
w
o
r
k
 
h
o
p
 
a
n
d
 
b
e
c
o
m
e
s
 
c
r
i
t
i
c
a
l
 
i
n
f
r
a
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
b
"
,


 
 
 
 
n
a
m
e
:
 
"
D
a
t
a
b
a
s
e
 
b
u
f
f
e
r
 
c
a
c
h
e
"
,


 
 
 
 
w
h
e
r
e
:
 
"
I
n
s
i
d
e
 
t
h
e
 
d
a
t
a
b
a
s
e
"
,


 
 
 
 
l
a
t
e
n
c
y
:
 
"
~
1
-
1
0
m
s
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
P
o
s
t
g
r
e
s
 
s
h
a
r
e
d
_
b
u
f
f
e
r
s
,
 
M
y
S
Q
L
 
I
n
n
o
D
B
 
b
u
f
f
e
r
 
p
o
o
l
"
,


 
 
 
 
c
o
l
o
r
:
 
"
#
0
6
b
6
d
4
"
,


 
 
 
 
t
r
a
d
e
o
f
f
:
 
"
F
r
e
e
 
a
n
d
 
a
u
t
o
m
a
t
i
c
 
-
 
t
h
e
 
D
B
 
k
e
e
p
s
 
h
o
t
 
p
a
g
e
s
 
i
n
 
R
A
M
.
 
O
p
a
q
u
e
,
 
w
i
t
h
 
n
o
 
a
p
p
-
l
e
v
e
l
 
c
o
n
t
r
o
l
.
 
H
e
l
p
s
,
 
b
u
t
 
r
a
r
e
l
y
 
e
n
o
u
g
h
 
o
n
 
i
t
s
 
o
w
n
.
 
(
M
y
S
Q
L
'
s
 
o
l
d
 
q
u
e
r
y
 
c
a
c
h
e
 
w
a
s
 
r
e
m
o
v
e
d
 
i
n
 
8
.
0
.
)
"
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
L
a
y
e
r
s
4
(
)
 
{


 
 
c
o
n
s
t
 
[
o
p
e
n
,
 
s
e
t
O
p
e
n
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
>
(
"
d
i
s
t
r
i
b
u
t
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
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
C
a
c
h
i
n
g
 
i
s
n
&
r
s
q
u
o
;
t
 
o
n
e
 
t
h
i
n
g
.
 
I
t
&
r
s
q
u
o
;
s
 
f
i
v
e
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
 
r
e
a
l
-
w
o
r
l
d
 
r
e
q
u
e
s
t
 
t
o
u
c
h
e
s
 
c
a
c
h
e
s
 
a
t
 
m
u
l
t
i
p
l
e
 
l
a
y
e
r
s
.
 
E
a
c
h
 
l
a
y
e
r
 
h
a
s
 
i
t
s
 
o
w
n
 
r
u
l
e
s
 
a
n
d


 
 
 
 
 
 
 
 
f
a
i
l
u
r
e
 
m
o
d
e
s
.
 
K
n
o
w
i
n
g
 
w
h
i
c
h
 
l
a
y
e
r
 
t
o
 
a
d
d
 
a
 
c
a
c
h
e
 
a
t
 
i
s
 
h
a
l
f
 
t
h
e
 
i
n
t
e
r
v
i
e
w
.


 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
L
A
Y
E
R
S
.
m
a
p
(
(
l
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
O
p
e
n
 
=
 
o
p
e
n
 
=
=
=
 
l
.
i
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
l
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
i
s
O
p
e
n
 
?
 
l
.
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
O
p
e
n
(
i
s
O
p
e
n
 
?
 
"
"
 
:
 
l
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
t
e
x
t
A
l
i
g
n
:
 
"
l
e
f
t
"
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
O
p
e
n
 
?
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
-
a
l
t
)
"
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
n
o
n
e
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
2
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
4
,
 
h
e
i
g
h
t
:
 
3
4
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
p
l
a
c
e
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
l
.
c
o
l
o
r
}
1
A
`
,
 
c
o
l
o
r
:
 
l
.
c
o
l
o
r
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
a
y
e
r
s
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
w
h
e
r
e
}
 
&
m
i
d
d
o
t
;
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
l
.
c
o
l
o
r
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
l
.
l
a
t
e
n
c
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
O
p
e
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
6
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
l
.
c
o
l
o
r
 
}
}
>
E
x
a
m
p
l
e
 
t
e
c
h
:
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
 
}
}
>
{
l
.
e
x
a
m
p
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
l
.
c
o
l
o
r
}
1
4
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
t
r
a
d
e
o
f
f
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


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
I
n
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
 
&
 
e
v
i
c
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
S
t
r
a
t
e
g
y
 
=
 
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
s
c
:
 
s
t
r
i
n
g
;


 
 
w
h
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


 
 
c
o
l
o
r
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




c
o
n
s
t
 
E
V
I
C
T
I
O
N
:
 
S
t
r
a
t
e
g
y
[
]
 
=
 
[


 
 
{


 
 
 
 
n
a
m
e
:
 
"
L
R
U
"
,


 
 
 
 
d
e
s
c
:
 
"
E
v
i
c
t
 
t
h
e
 
L
e
a
s
t
 
R
e
c
e
n
t
l
y
 
U
s
e
d
 
k
e
y
 
w
h
e
n
 
f
u
l
l
.
"
,


 
 
 
 
w
h
e
n
:
 
"
D
e
f
a
u
l
t
 
c
h
o
i
c
e
.
 
M
o
s
t
 
w
o
r
k
l
o
a
d
s
 
h
a
v
e
 
t
e
m
p
o
r
a
l
 
l
o
c
a
l
i
t
y
 
-
 
r
e
c
e
n
t
 
k
e
y
s
 
a
r
e
 
m
o
r
e
 
l
i
k
e
l
y
 
t
o
 
b
e
 
r
e
-
r
e
a
d
.
"
,


 
 
 
 
c
o
l
o
r
:
 
O
K
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
L
F
U
"
,


 
 
 
 
d
e
s
c
:
 
"
E
v
i
c
t
 
t
h
e
 
L
e
a
s
t
 
F
r
e
q
u
e
n
t
l
y
 
U
s
e
d
 
k
e
y
.
"
,


 
 
 
 
w
h
e
n
:
 
"
G
o
o
d
 
w
h
e
n
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
 
i
s
 
s
t
a
b
l
e
 
a
n
d
 
p
o
p
u
l
a
r
 
k
e
y
s
 
s
t
a
y
 
p
o
p
u
l
a
r
 
(
e
.
g
.
,
 
p
r
o
d
u
c
t
 
c
a
t
a
l
o
g
s
)
.
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
T
T
L
"
,


 
 
 
 
d
e
s
c
:
 
"
E
v
e
r
y
 
k
e
y
 
h
a
s
 
a
 
t
i
m
e
-
t
o
-
l
i
v
e
.
 
W
h
e
n
 
i
t
 
e
x
p
i
r
e
s
,
 
i
t
'
s
 
g
o
n
e
.
"
,


 
 
 
 
w
h
e
n
:
 
"
F
o
r
 
d
a
t
a
 
t
h
a
t
 
g
o
e
s
 
s
t
a
l
e
 
o
n
 
a
 
p
r
e
d
i
c
t
a
b
l
e
 
s
c
h
e
d
u
l
e
 
(
f
e
e
d
s
,
 
p
r
i
c
e
s
,
 
c
o
n
f
i
g
s
)
.
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
F
I
F
O
"
,


 
 
 
 
d
e
s
c
:
 
"
E
v
i
c
t
 
w
h
a
t
e
v
e
r
 
c
a
m
e
 
i
n
 
f
i
r
s
t
,
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
a
c
c
e
s
s
.
"
,


 
 
 
 
w
h
e
n
:
 
"
R
a
r
e
.
 
S
i
m
p
l
e
r
 
t
h
a
n
 
L
R
U
 
b
u
t
 
i
g
n
o
r
e
s
 
u
s
a
g
e
 
-
 
u
s
u
a
l
l
y
 
t
h
e
 
w
r
o
n
g
 
a
n
s
w
e
r
.
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
I
n
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
A
n
d
E
v
i
c
t
i
o
n
(
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
h
a
r
d
 
p
a
r
t
 
i
s
n
&
r
s
q
u
o
;
t
 
c
a
c
h
i
n
g
.
 
I
t
&
r
s
q
u
o
;
s
 
s
t
a
y
i
n
g
 
f
r
e
s
h
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
P
h
i
l
 
K
a
r
l
t
o
n
 
s
a
i
d
 
t
h
e
r
e
 
a
r
e
 
o
n
l
y
 
t
w
o
 
h
a
r
d
 
p
r
o
b
l
e
m
s
 
i
n
 
c
o
m
p
u
t
e
r
 
s
c
i
e
n
c
e
:
 
c
a
c
h
e


 
 
 
 
 
 
 
 
i
n
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
 
a
n
d
 
n
a
m
i
n
g
 
t
h
i
n
g
s
.
 
C
a
c
h
i
n
g
 
d
a
t
a
 
i
s
 
a
 
o
n
e
-
l
i
n
e
 
c
a
l
l
.
 
M
a
k
i
n
g
 
s
u
r
e
 
t
h
a
t
 
d
a
t
a


 
 
 
 
 
 
 
 
i
s
 
<
e
m
>
s
t
i
l
l
 
r
i
g
h
t
<
/
e
m
>
 
-
 
t
h
a
t
&
r
s
q
u
o
;
s
 
t
h
e
 
r
e
a
l
 
w
o
r
k
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
I
n
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
 
p
a
t
t
e
r
n
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
1
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
0
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
R
e
f
r
e
s
h
C
w
 
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>
 
T
h
r
e
e
 
c
o
m
m
o
n
 
i
n
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
 
p
a
t
t
e
r
n
s


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
a
p
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
0
8
)
"
,
 
b
o
r
d
e
r
L
e
f
t
:
 
`
3
p
x
 
s
o
l
i
d
 
$
{
O
K
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
c
o
l
o
r
:
 
O
K
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
r
i
t
e
-
t
h
r
o
u
g
h


 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
n
 
e
v
e
r
y
 
w
r
i
t
e
:
 
u
p
d
a
t
e
 
t
h
e
 
D
B
 
<
e
m
>
a
n
d
<
/
e
m
>
 
t
h
e
 
c
a
c
h
e
 
i
n
 
t
h
e
 
s
a
m
e
 
o
p
e
r
a
t
i
o
n
.
 
C
a
c
h
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
 
a
l
w
a
y
s
 
f
r
e
s
h
.
 
C
o
s
t
:
 
w
r
i
t
e
s
 
g
e
t
 
s
l
o
w
e
r
.


 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
0
8
)
"
,
 
b
o
r
d
e
r
L
e
f
t
:
 
`
3
p
x
 
s
o
l
i
d
 
$
{
P
U
R
P
L
E
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
c
h
e
-
a
s
i
d
e
 
(
r
e
a
d
-
t
h
r
o
u
g
h
,
 
l
a
z
y
 
p
o
p
u
l
a
t
e
)


 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
i
s
 
i
s
 
a
 
<
e
m
>
r
e
a
d
<
/
e
m
>
 
p
a
t
t
e
r
n
:
 
a
p
p
 
c
h
e
c
k
s
 
c
a
c
h
e
 
→
 
m
i
s
s
 
→
 
r
e
a
d
s
 
D
B
 
→
 
p
o
p
u
l
a
t
e
s
 
c
a
c
h
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
s
u
a
l
l
y
 
p
a
i
r
e
d
 
w
i
t
h
 
<
e
m
>
w
r
i
t
e
-
a
r
o
u
n
d
<
/
e
m
>
 
(
w
r
i
t
e
s
 
s
k
i
p
 
t
h
e
 
c
a
c
h
e
,
 
g
o
 
s
t
r
a
i
g
h
t
 
t
o
 
D
B
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
d
 
y
o
u
 
i
n
v
a
l
i
d
a
t
e
/
u
p
d
a
t
e
 
t
h
e
 
c
a
c
h
e
 
k
e
y
)
.
 
M
o
s
t
 
c
o
m
m
o
n
 
c
o
m
b
o
 
i
n
 
t
h
e
 
w
i
l
d
.
 
R
i
s
k
:
 
s
t
a
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
a
d
s
 
r
i
g
h
t
 
a
f
t
e
r
 
a
 
w
r
i
t
e
 
i
f
 
y
o
u
 
f
o
r
g
e
t
 
t
o
 
i
n
v
a
l
i
d
a
t
e
.


 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
0
8
)
"
,
 
b
o
r
d
e
r
L
e
f
t
:
 
`
3
p
x
 
s
o
l
i
d
 
$
{
W
A
R
N
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
c
o
l
o
r
:
 
W
A
R
N
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
r
i
t
e
-
b
a
c
k
 
(
w
r
i
t
e
-
b
e
h
i
n
d
)


 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
r
i
t
e
s
 
g
o
 
o
n
l
y
 
t
o
 
c
a
c
h
e
;
 
c
a
c
h
e
 
f
l
u
s
h
e
s
 
t
o
 
D
B
 
a
s
y
n
c
.
 
F
a
s
t
e
s
t
 
w
r
i
t
e
s
.
 
R
i
s
k
:
 
i
f
 
t
h
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
c
h
e
 
d
i
e
s
 
b
e
f
o
r
e
 
f
l
u
s
h
,
 
y
o
u
 
l
o
s
e
 
d
a
t
a
.
 
R
a
r
e
l
y
 
w
o
r
t
h
 
i
t
.


 
 
 
 
 
 
 
 
 
 
 
 
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
 
E
v
i
c
t
i
o
n
 
p
o
l
i
c
i
e
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
1
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
0
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
C
l
o
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
4
 
h
-
4
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>
 
E
v
i
c
t
i
o
n
:
 
t
h
e
 
c
a
c
h
e
 
i
s
 
f
u
l
l
,
 
w
h
o
 
g
o
e
s
?


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
E
V
I
C
T
I
O
N
.
m
a
p
(
(
e
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
e
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
e
.
c
o
l
o
r
}
1
4
`
,
 
b
o
r
d
e
r
L
e
f
t
:
 
`
3
p
x
 
s
o
l
i
d
 
$
{
e
.
c
o
l
o
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
c
o
l
o
r
:
 
e
.
c
o
l
o
r
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
d
e
s
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
w
h
e
n
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




 
 
 
 
 
 
{
/
*
 
G
o
t
c
h
a
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
1
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
 
}
}
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
4
 
h
-
4
"
 
/
>
 
T
h
r
e
e
 
c
a
c
h
i
n
g
 
f
a
i
l
u
r
e
 
m
o
d
e
s
 
i
n
t
e
r
v
i
e
w
e
r
s
 
l
o
v
e


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
u
l
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
p
a
d
d
i
n
g
L
e
f
t
:
 
1
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
>
T
h
u
n
d
e
r
i
n
g
 
h
e
r
d
:
<
/
b
>
 
a
 
h
o
t
 
k
e
y
 
e
x
p
i
r
e
s
 
→
 
t
h
o
u
s
a
n
d
s
 
o
f
 
r
e
q
u
e
s
t
s
 
a
l
l
 
m
i
s
s
 
a
t
 
o
n
c
e
 
→


 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
y
 
a
l
l
 
s
l
a
m
 
t
h
e
 
D
B
.
 
F
i
x
:
 
r
e
q
u
e
s
t
 
c
o
a
l
e
s
c
i
n
g
 
o
r
 
p
r
o
b
a
b
i
l
i
s
t
i
c
 
e
a
r
l
y
 
r
e
f
r
e
s
h
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
>
C
a
c
h
e
 
s
t
a
m
p
e
d
e
 
o
n
 
c
o
l
d
 
s
t
a
r
t
:
<
/
b
>
 
d
e
p
l
o
y
 
c
l
e
a
r
s
 
a
l
l
 
c
a
c
h
e
s
 
→
 
e
v
e
r
y
 
r
e
q
u
e
s
t
 
i
s
 
a


 
 
 
 
 
 
 
 
 
 
 
 
m
i
s
s
 
→
 
D
B
 
m
e
l
t
s
.
 
F
i
x
:
 
w
a
r
m
 
t
h
e
 
c
a
c
h
e
 
b
e
f
o
r
e
 
t
a
k
i
n
g
 
t
r
a
f
f
i
c
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
>
S
t
a
l
e
 
d
a
t
a
 
a
f
t
e
r
 
w
r
i
t
e
s
:
<
/
b
>
 
w
r
i
t
e
-
a
r
o
u
n
d
 
m
e
a
n
s
 
t
h
e
 
c
a
c
h
e
 
s
t
i
l
l
 
h
a
s
 
t
h
e
 
o
l
d
 
v
a
l
u
e


 
 
 
 
 
 
 
 
 
 
 
 
u
n
t
i
l
 
T
T
L
.
 
F
i
x
:
 
i
n
v
a
l
i
d
a
t
e
 
e
x
p
l
i
c
i
t
l
y
 
o
n
 
w
r
i
t
e
,
 
o
r
 
u
s
e
 
s
h
o
r
t
 
T
T
L
s
.


 
 
 
 
 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
M
A
I
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
D
_
L
2
_
C
a
c
h
i
n
g
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
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
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
h
i
t
m
i
s
s
"
,
 
l
a
b
e
l
:
 
"
H
i
t
s
 
v
s
 
M
i
s
s
e
s
"
,
 
 
 
 
i
c
o
n
:
 
<
Z
a
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
w
-
4
 
h
-
4
"
 
/
>
,
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
H
i
t
M
i
s
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
l
a
y
e
r
s
"
,
 
 
l
a
b
e
l
:
 
"
W
h
e
r
e
 
t
o
 
C
a
c
h
e
"
,
 
 
 
 
i
c
o
n
:
 
<
L
a
y
e
r
s
 
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
,
 
 
c
o
n
t
e
n
t
:
 
<
L
a
y
e
r
s
4
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
v
a
l
i
d
"
,
 
l
a
b
e
l
:
 
"
I
n
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
 
&
 
E
v
i
c
t
i
o
n
"
,
 
i
c
o
n
:
 
<
R
e
f
r
e
s
h
C
w
 
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
,
 
c
o
n
t
e
n
t
:
 
<
I
n
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
A
n
d
E
v
i
c
t
i
o
n
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
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
 
=
 
[


 
 
 
 
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
 
"
A
 
c
a
c
h
e
 
s
i
t
s
 
i
n
 
f
r
o
n
t
 
o
f
 
t
h
e
 
d
a
t
a
b
a
s
e
.
 
W
h
a
t
'
s
 
t
h
e
 
m
a
i
n
 
r
e
a
s
o
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
o
 
r
e
d
u
c
e
 
t
h
e
 
a
m
o
u
n
t
 
o
f
 
c
o
d
e
 
i
n
 
t
h
e
 
a
p
p
 
s
e
r
v
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
s
e
r
v
e
 
h
o
t
 
d
a
t
a
 
f
a
s
t
e
r
 
a
n
d
 
r
e
d
u
c
e
 
l
o
a
d
 
o
n
 
t
h
e
 
s
l
o
w
e
r
 
s
t
o
r
e
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
r
e
p
l
a
c
e
 
t
h
e
 
d
a
t
a
b
a
s
e
 
e
n
t
i
r
e
l
y
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
m
a
k
e
 
t
h
e
 
s
y
s
t
e
m
 
s
t
a
t
e
l
e
s
s
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
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
 
1
,


 
 
 
 
 
 
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
:
 
"
A
 
c
a
c
h
e
 
i
s
 
a
 
f
a
s
t
e
r
 
c
o
p
y
 
o
f
 
t
h
e
 
'
h
o
t
'
 
s
u
b
s
e
t
 
o
f
 
d
a
t
a
.
 
I
t
 
p
r
o
t
e
c
t
s
 
t
h
e
 
s
l
o
w
e
r
 
s
t
o
r
e
 
(
D
B
/
A
P
I
)
 
a
n
d
 
c
u
t
s
 
t
a
i
l
 
l
a
t
e
n
c
y
 
d
r
a
m
a
t
i
c
a
l
l
y
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
Y
o
u
r
 
c
a
c
h
e
 
h
i
t
s
 
a
t
 
9
5
%
,
 
m
i
s
s
e
s
 
a
t
 
5
%
.
 
C
a
c
h
e
 
i
s
 
2
m
s
,
 
D
B
 
i
s
 
1
0
0
m
s
.
 
R
o
u
g
h
 
a
v
e
r
a
g
e
 
l
a
t
e
n
c
y
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
~
2
m
s
"
,


 
 
 
 
 
 
 
 
"
~
7
m
s
"
,


 
 
 
 
 
 
 
 
"
~
5
0
m
s
"
,


 
 
 
 
 
 
 
 
"
~
1
0
0
m
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
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
 
1
,


 
 
 
 
 
 
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
:
 
"
0
.
9
5
 
×
 
2
m
s
 
+
 
0
.
0
5
 
×
 
1
0
0
m
s
 
=
 
1
.
9
 
+
 
5
 
=
 
6
.
9
m
s
.
 
~
7
m
s
.
 
S
m
a
l
l
 
m
i
s
s
 
r
a
t
e
s
 
s
t
i
l
l
 
d
o
m
i
n
a
t
e
 
l
a
t
e
n
c
y
 
b
e
c
a
u
s
e
 
m
i
s
s
e
s
 
a
r
e
 
s
o
 
m
u
c
h
 
m
o
r
e
 
e
x
p
e
n
s
i
v
e
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
Y
o
u
 
w
a
n
t
 
t
o
 
c
a
c
h
e
 
t
h
e
 
h
o
m
e
 
f
e
e
d
 
f
o
r
 
l
o
g
g
e
d
-
i
n
 
u
s
e
r
s
,
 
i
n
v
a
l
i
d
a
t
e
d
 
w
h
e
n
 
t
h
e
y
 
p
o
s
t
.
 
W
h
i
c
h
 
s
t
r
a
t
e
g
y
 
f
i
t
s
 
b
e
s
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
W
r
i
t
e
-
b
a
c
k
 
-
 
f
a
s
t
e
s
t
 
w
r
i
t
e
s
.
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
e
-
a
s
i
d
e
 
w
i
t
h
 
e
x
p
l
i
c
i
t
 
i
n
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
 
o
n
 
p
o
s
t
.
"
,


 
 
 
 
 
 
 
 
"
B
r
o
w
s
e
r
 
c
a
c
h
e
 
w
i
t
h
 
l
o
n
g
 
T
T
L
.
"
,


 
 
 
 
 
 
 
 
"
D
a
t
a
b
a
s
e
 
q
u
e
r
y
 
c
a
c
h
e
 
o
n
l
y
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
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
 
1
,


 
 
 
 
 
 
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
:
 
"
C
a
c
h
e
-
a
s
i
d
e
 
(
r
e
a
d
-
t
h
r
o
u
g
h
 
+
 
l
a
z
y
 
p
o
p
u
l
a
t
e
)
 
i
s
 
t
h
e
 
s
t
a
n
d
a
r
d
.
 
P
a
i
r
 
i
t
 
w
i
t
h
 
e
x
p
l
i
c
i
t
 
i
n
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
 
o
n
 
w
r
i
t
e
 
t
o
 
k
e
e
p
 
t
h
e
 
f
e
e
d
 
f
r
e
s
h
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
Y
o
u
r
 
m
o
s
t
 
p
o
p
u
l
a
r
 
c
a
c
h
e
d
 
k
e
y
 
e
x
p
i
r
e
s
.
 
W
i
t
h
i
n
 
1
m
s
,
 
1
0
,
0
0
0
 
r
e
q
u
e
s
t
s
 
a
l
l
 
m
i
s
s
 
a
n
d
 
h
i
t
 
t
h
e
 
D
B
,
 
w
h
i
c
h
 
f
a
l
l
s
 
o
v
e
r
.
 
T
h
i
s
 
i
s
:
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
C
a
c
h
e
-
a
s
i
d
e
 
f
a
i
l
u
r
e
"
,


 
 
 
 
 
 
 
 
"
A
 
t
h
u
n
d
e
r
i
n
g
 
h
e
r
d
 
/
 
c
a
c
h
e
 
s
t
a
m
p
e
d
e
"
,


 
 
 
 
 
 
 
 
"
L
R
U
 
e
v
i
c
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
e
 
p
o
i
s
o
n
i
n
g
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
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
 
1
,


 
 
 
 
 
 
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
:
 
"
T
h
u
n
d
e
r
i
n
g
 
h
e
r
d
:
 
m
a
n
y
 
c
o
n
c
u
r
r
e
n
t
 
m
i
s
s
e
s
 
f
o
r
 
t
h
e
 
s
a
m
e
 
k
e
y
 
h
a
m
m
e
r
 
t
h
e
 
b
a
c
k
i
n
g
 
s
t
o
r
e
.
 
F
i
x
 
w
i
t
h
 
r
e
q
u
e
s
t
 
c
o
a
l
e
s
c
i
n
g
,
 
m
u
t
e
x
 
o
n
 
m
i
s
s
,
 
o
r
 
p
r
o
b
a
b
i
l
i
s
t
i
c
 
e
a
r
l
y
 
r
e
f
r
e
s
h
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
W
h
i
c
h
 
e
v
i
c
t
i
o
n
 
p
o
l
i
c
y
 
i
s
 
t
h
e
 
s
e
n
s
i
b
l
e
 
d
e
f
a
u
l
t
 
f
o
r
 
a
 
g
e
n
e
r
a
l
-
p
u
r
p
o
s
e
 
c
a
c
h
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
F
I
F
O
 
-
 
s
i
m
p
l
e
s
t
 
t
o
 
i
m
p
l
e
m
e
n
t
"
,


 
 
 
 
 
 
 
 
"
L
R
U
 
-
 
r
e
c
e
n
t
l
y
 
u
s
e
d
 
i
s
 
a
 
g
o
o
d
 
p
r
e
d
i
c
t
o
r
 
o
f
 
f
u
t
u
r
e
 
u
s
e
"
,


 
 
 
 
 
 
 
 
"
R
a
n
d
o
m
 
-
 
f
a
s
t
 
a
n
d
 
f
a
i
r
"
,


 
 
 
 
 
 
 
 
"
N
o
 
e
v
i
c
t
i
o
n
 
-
 
l
e
t
 
i
t
 
g
r
o
w
 
f
o
r
e
v
e
r
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
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
 
1
,


 
 
 
 
 
 
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
:
 
"
M
o
s
t
 
w
o
r
k
l
o
a
d
s
 
h
a
v
e
 
t
e
m
p
o
r
a
l
 
l
o
c
a
l
i
t
y
:
 
i
f
 
y
o
u
 
a
c
c
e
s
s
e
d
 
a
 
k
e
y
 
r
e
c
e
n
t
l
y
,
 
y
o
u
'
r
e
 
l
i
k
e
l
y
 
t
o
 
a
c
c
e
s
s
 
i
t
 
a
g
a
i
n
 
s
o
o
n
.
 
L
R
U
 
e
x
p
l
o
i
t
s
 
t
h
a
t
.
 
L
F
U
 
w
i
n
s
 
f
o
r
 
v
e
r
y
 
s
t
a
b
l
e
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
s
.
"
,


 
 
 
 
}
,


 
 
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
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
C
a
c
h
i
n
g
 
1
0
1
"


 
 
 
 
 
 
l
e
v
e
l
=
{
2
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
6
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
A
p
p
e
a
r
s
 
i
n
 
e
v
e
r
y
 
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
h
a
t
 
a
s
k
s
 
'
h
o
w
 
d
o
 
y
o
u
 
m
a
k
e
 
t
h
i
s
 
f
a
s
t
e
r
?
'
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


