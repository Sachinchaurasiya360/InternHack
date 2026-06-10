
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
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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


 
 
S
e
r
v
e
r
,
 
D
a
t
a
b
a
s
e
,
 
K
e
y
,
 
C
o
o
k
i
e
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
 
C
h
e
c
k
,
 
X
,
 
P
o
w
e
r
,
 
A
r
r
o
w
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
 
T
h
e
 
d
e
f
i
n
i
t
i
o
n
 
(
s
e
n
d
 
t
o
 
a
n
y
 
/
 
s
e
n
d
 
t
o
 
o
n
e
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
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
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
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
"
s
t
a
t
e
l
e
s
s
"
 
|
 
"
s
t
a
t
e
f
u
l
"
>
(
"
s
t
a
t
e
l
e
s
s
"
)
;


 
 
c
o
n
s
t
 
[
t
a
r
g
e
t
I
d
x
,
 
s
e
t
T
a
r
g
e
t
I
d
x
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




 
 
/
/
 
F
o
r
 
"
s
t
a
t
e
f
u
l
"
:
 
a
s
s
u
m
e
 
s
e
s
s
i
o
n
 
l
i
v
e
s
 
o
n
 
s
e
r
v
e
r
 
#
1
 
(
i
n
d
e
x
 
0
)
.


 
 
c
o
n
s
t
 
s
e
s
s
i
o
n
H
o
s
t
 
=
 
0
;




 
 
f
u
n
c
t
i
o
n
 
s
e
n
d
T
o
(
i
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
s
e
t
T
a
r
g
e
t
I
d
x
(
i
)
;


 
 
 
 
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
 
s
e
t
T
a
r
g
e
t
I
d
x
(
n
u
l
l
)
,
 
1
4
0
0
)
;


 
 
}




 
 
f
u
n
c
t
i
o
n
 
r
e
s
u
l
t
(
i
:
 
n
u
m
b
e
r
)
:
 
"
o
k
"
 
|
 
"
f
a
i
l
"
 
|
 
n
u
l
l
 
{


 
 
 
 
i
f
 
(
t
a
r
g
e
t
I
d
x
 
!
=
=
 
i
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
s
t
a
t
e
l
e
s
s
"
)
 
r
e
t
u
r
n
 
"
o
k
"
;


 
 
 
 
r
e
t
u
r
n
 
i
 
=
=
=
 
s
e
s
s
i
o
n
H
o
s
t
 
?
 
"
o
k
"
 
:
 
"
f
a
i
l
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
n
 
a
n
y
 
s
e
r
v
e
r
 
a
n
s
w
e
r
 
t
h
i
s
 
r
e
q
u
e
s
t
?
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
 
s
e
r
v
i
c
e
 
i
s
 
<
b
>
s
t
a
t
e
l
e
s
s
<
/
b
>
 
i
f
 
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
 
c
a
r
r
i
e
s
 
e
v
e
r
y
t
h
i
n
g
 
t
h
e
 
s
e
r
v
e
r
 
n
e
e
d
s
.
 
A
n
y


 
 
 
 
 
 
 
 
o
f
 
t
h
e
 
N
 
s
e
r
v
e
r
s
 
c
a
n
 
a
n
s
w
e
r
 
-
 
p
i
c
k
 
o
n
e
 
a
t
 
r
a
n
d
o
m
 
a
n
d
 
i
t
 
w
o
r
k
s
.
 
A
 
s
e
r
v
i
c
e
 
i
s
{
"
 
"
}


 
 
 
 
 
 
 
 
<
b
>
s
t
a
t
e
f
u
l
<
/
b
>
 
i
f
 
t
h
e
 
s
e
r
v
e
r
 
h
o
l
d
s
 
m
e
m
o
r
y
 
b
e
t
w
e
e
n
 
y
o
u
r
 
r
e
q
u
e
s
t
s
 
(
a
 
s
e
s
s
i
o
n
)
.
 
N
o
w
 
o
n
l
y
{
"
 
"
}


 
 
 
 
 
 
 
 
<
e
m
>
o
n
e
 
s
p
e
c
i
f
i
c
<
/
e
m
>
 
s
e
r
v
e
r
 
c
a
n
 
a
n
s
w
e
r
 
y
o
u
 
-
 
t
h
e
 
o
n
e
 
t
h
a
t
 
r
e
m
e
m
b
e
r
s
 
y
o
u
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
M
o
d
e
 
s
w
i
t
c
h
 
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
8
 
}
}
>


 
 
 
 
 
 
 
 
{
(
[
"
s
t
a
t
e
l
e
s
s
"
,
 
"
s
t
a
t
e
f
u
l
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
m
o
d
e
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
M
o
d
e
(
m
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
a
c
t
i
v
e
 
?
 
S
D
 
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
 
a
c
t
i
v
e
 
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
 
a
c
t
i
v
e
 
?
 
S
D
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
s
t
a
t
e
l
e
s
s
"
 
?
 
"
S
t
a
t
e
l
e
s
s
 
m
o
d
e
"
 
:
 
"
S
t
a
t
e
f
u
l
 
m
o
d
e
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
 
D
i
a
g
r
a
m
:
 
c
l
i
e
n
t
 
+
 
3
 
s
e
r
v
e
r
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
8
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
4
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
a
u
t
o
 
1
f
r
"
,
 
g
a
p
:
 
2
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
l
i
e
n
t
 
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
 
"
1
4
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
c
e
n
t
e
r
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
2
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
-
a
l
t
)
"
,
 
m
i
n
W
i
d
t
h
:
 
9
0
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
L
I
E
N
T
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
 
}
}
>
Y
o
u
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
s
t
a
t
e
f
u
l
"
 
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
 
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
s
s
i
o
n
 
→
 
S
1


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
e
r
v
e
r
s
 
g
r
i
d
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
]
.
m
a
p
(
(
i
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
 
r
e
s
u
l
t
(
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
o
l
d
s
 
=
 
m
o
d
e
 
=
=
=
 
"
s
t
a
t
e
f
u
l
"
 
&
&
 
i
 
=
=
=
 
s
e
s
s
i
o
n
H
o
s
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
r
d
e
r
C
o
l
o
r
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
 
=
=
=
 
"
o
k
"
 
?
 
O
K
 
:
 
r
e
s
 
=
=
=
 
"
f
a
i
l
"
 
?
 
S
D
 
:
 
h
o
l
d
s
 
?
 
W
A
R
N
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
 
=
=
=
 
"
o
k
"
 
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
0
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
e
s
 
=
=
=
 
"
f
a
i
l
"
 
?
 
S
D
_
S
O
F
T


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
h
o
l
d
s
 
?
 
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
-
a
l
t
)
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
n
d
T
o
(
i
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
1
4
p
x
 
1
0
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
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
b
o
r
d
e
r
C
o
l
o
r
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
 
b
g
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
c
e
n
t
e
r
"
,
 
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
:
 
"
a
l
l
 
1
6
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
r
v
e
r
 
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
 
m
x
-
a
u
t
o
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
 
b
o
r
d
e
r
C
o
l
o
r
 
=
=
=
 
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
 
:
 
b
o
r
d
e
r
C
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
 
4
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
o
l
d
s
 
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
6
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
T
o
p
:
 
3
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
o
l
d
s
 
s
e
s
s
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
 
=
=
=
 
"
o
k
"
 
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
7
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
T
o
p
:
 
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
✓
 
2
0
0
 
O
K


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
 
=
=
=
 
"
f
a
i
l
"
 
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
7
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
 
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
✗
 
4
0
1
 
n
o
 
s
e
s
s
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
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
d
i
v
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
4
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
c
e
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


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
C
l
i
c
k
 
a
n
y
 
s
e
r
v
e
r
 
t
o
 
s
e
n
d
 
a
 
r
e
q
u
e
s
t
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




 
 
 
 
 
 
{
/
*
 
T
a
k
e
a
w
a
y
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
2
 
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
 
6
 
}
}
>
S
t
a
t
e
l
e
s
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
E
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
 
s
e
l
f
-
c
o
n
t
a
i
n
e
d
.
 
T
h
e
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
c
a
n
 
s
e
n
d
 
y
o
u
 
t
o
 
a
n
y
 
s
e
r
v
e
r
.
 
A
n
y


 
 
 
 
 
 
 
 
 
 
 
 
s
e
r
v
e
r
 
c
a
n
 
d
i
e
 
w
i
t
h
o
u
t
 
h
u
r
t
i
n
g
 
y
o
u
.
 
<
b
>
T
h
i
s
 
i
s
 
t
h
e
 
m
o
d
e
l
 
w
e
 
w
a
n
t
.
<
/
b
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
 
6
 
}
}
>
S
t
a
t
e
f
u
l
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
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
s
e
r
v
e
r
 
r
e
m
e
m
b
e
r
s
 
y
o
u
.
 
R
e
q
u
e
s
t
s
 
m
u
s
t
 
c
o
m
e
 
b
a
c
k
 
t
o
 
t
h
e
 
s
a
m
e
 
b
o
x
 
-
 
a
 
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
c
o
u
p
l
i
n
g
 
b
e
t
w
e
e
n
 
c
l
i
e
n
t
 
a
n
d
 
s
e
r
v
e
r
.
 
K
i
l
l
s
 
h
o
r
i
z
o
n
t
a
l
 
s
c
a
l
i
n
g
 
a
n
d
 
f
a
u
l
t
 
t
o
l
e
r
a
n
c
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
 
K
i
l
l
 
a
 
s
e
r
v
e
r
 
d
e
m
o
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
K
i
l
l
S
e
r
v
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
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
"
s
t
a
t
e
l
e
s
s
"
 
|
 
"
s
t
a
t
e
f
u
l
"
>
(
"
s
t
a
t
e
l
e
s
s
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
a
d
,
 
s
e
t
D
e
a
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
<
S
e
t
<
n
u
m
b
e
r
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
 
s
e
s
s
i
o
n
H
o
s
t
 
=
 
1
;
 
/
/
 
s
e
s
s
i
o
n
 
l
i
v
e
s
 
o
n
 
S
2




 
 
f
u
n
c
t
i
o
n
 
k
i
l
l
(
i
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
s
e
t
D
e
a
d
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
)
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
i
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
i
)
;


 
 
 
 
 
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
i
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
)
;


 
 
}




 
 
f
u
n
c
t
i
o
n
 
r
e
s
e
t
(
)
 
{


 
 
 
 
s
e
t
D
e
a
d
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


 
 
}




 
 
c
o
n
s
t
 
a
l
i
v
e
 
=
 
[
0
,
 
1
,
 
2
,
 
3
]
.
f
i
l
t
e
r
(
(
i
)
 
=
>
 
!
d
e
a
d
.
h
a
s
(
i
)
)
;


 
 
c
o
n
s
t
 
s
e
s
s
i
o
n
A
l
i
v
e
 
=
 
!
d
e
a
d
.
h
a
s
(
s
e
s
s
i
o
n
H
o
s
t
)
;




 
 
c
o
n
s
t
 
s
t
i
l
l
W
o
r
k
s
 
=


 
 
 
 
m
o
d
e
 
=
=
=
 
"
s
t
a
t
e
l
e
s
s
"
 
?
 
a
l
i
v
e
.
l
e
n
g
t
h
 
>
 
0
 
:
 
s
e
s
s
i
o
n
A
l
i
v
e
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
W
h
y
 
s
t
a
t
e
l
e
s
s
n
e
s
s
 
u
n
l
o
c
k
s
 
h
o
r
i
z
o
n
t
a
l
 
s
c
a
l
i
n
g
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
 
s
c
a
l
i
n
g
 
m
e
a
n
s
 
<
e
m
>
o
n
e
 
s
e
r
v
e
r
 
d
i
e
s
,
 
t
h
e
 
r
e
s
t
 
p
i
c
k
 
u
p
 
t
h
e
 
l
o
a
d
<
/
e
m
>
.
 
B
u
t
 
t
h
a
t


 
 
 
 
 
 
 
 
o
n
l
y
 
w
o
r
k
s
 
i
f
 
a
n
y
 
s
e
r
v
e
r
 
c
a
n
 
a
n
s
w
e
r
.
 
I
f
 
y
o
u
r
 
u
s
e
r
&
r
s
q
u
o
;
s
 
s
e
s
s
i
o
n
 
l
i
v
e
s
 
o
n
 
t
h
e
 
d
e
a
d


 
 
 
 
 
 
 
 
b
o
x
&
h
e
l
l
i
p
;
 
t
h
e
y
&
r
s
q
u
o
;
r
e
 
l
o
g
g
e
d
 
o
u
t
.


 
 
 
 
 
 
<
/
p
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
 
}
}
>


 
 
 
 
 
 
 
 
{
(
[
"
s
t
a
t
e
l
e
s
s
"
,
 
"
s
t
a
t
e
f
u
l
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
m
o
d
e
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
M
o
d
e
(
m
)
;
 
r
e
s
e
t
(
)
;
 
}
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
a
c
t
i
v
e
 
?
 
S
D
 
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
 
a
c
t
i
v
e
 
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
 
a
c
t
i
v
e
 
?
 
S
D
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
s
t
a
t
e
l
e
s
s
"
 
?
 
"
S
t
a
t
e
l
e
s
s
 
f
l
e
e
t
"
 
:
 
"
S
t
a
t
e
f
u
l
 
f
l
e
e
t
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


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
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
r
e
s
e
t
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
5
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
 
"
a
u
t
o
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
R
e
s
e
t
 
f
l
e
e
t


 
 
 
 
 
 
 
 
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
 
F
l
e
e
t
 
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
8
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
4
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
[
0
,
 
1
,
 
2
,
 
3
]
.
m
a
p
(
(
i
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
D
e
a
d
 
=
 
d
e
a
d
.
h
a
s
(
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
o
l
d
s
S
e
s
s
i
o
n
 
=
 
m
o
d
e
 
=
=
=
 
"
s
t
a
t
e
f
u
l
"
 
&
&
 
i
 
=
=
=
 
s
e
s
s
i
o
n
H
o
s
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
r
d
e
r
C
o
l
o
r
 
=
 
i
s
D
e
a
d
 
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
b
o
r
d
e
r
)
"
 
:
 
h
o
l
d
s
S
e
s
s
i
o
n
 
?
 
W
A
R
N
 
:
 
O
K
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
k
i
l
l
(
i
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
1
4
p
x
 
1
0
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
o
r
d
e
r
:
 
`
2
p
x
 
s
o
l
i
d
 
$
{
b
o
r
d
e
r
C
o
l
o
r
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
 
i
s
D
e
a
d
 
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
 
h
o
l
d
s
S
e
s
s
i
o
n
 
?
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
i
s
D
e
a
d
 
?
 
0
.
4
5
 
:
 
1
,
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
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
c
e
n
t
e
r
"
,
 
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
:
 
"
a
l
l
 
1
6
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
r
v
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
x
-
a
u
t
o
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
 
i
s
D
e
a
d
 
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
 
:
 
h
o
l
d
s
S
e
s
s
i
o
n
 
?
 
W
A
R
N
 
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
 
4
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
{
i
 
+
 
1
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
6
8
r
e
m
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
 
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
D
e
a
d
 
?
 
S
D
 
:
 
O
K
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
D
e
a
d
 
?
 
"
D
O
W
N
"
 
:
 
"
H
E
A
L
T
H
Y
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
o
l
d
s
S
e
s
s
i
o
n
 
&
&
 
!
i
s
D
e
a
d
 
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
6
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
T
o
p
:
 
2
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
s
 
y
o
u
r
 
s
e
s
s
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
o
l
d
s
S
e
s
s
i
o
n
 
&
&
 
i
s
D
e
a
d
 
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
6
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
s
s
i
o
n
 
l
o
s
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
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
p


 
 
 
 
 
 
 
 
 
 
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
4
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
c
e
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


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
C
l
i
c
k
 
a
 
s
e
r
v
e
r
 
t
o
 
s
i
m
u
l
a
t
e
 
i
t
 
c
r
a
s
h
i
n
g
.
 
C
l
i
c
k
 
a
g
a
i
n
 
t
o
 
b
r
i
n
g
 
i
t
 
b
a
c
k
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




 
 
 
 
 
 
{
/
*
 
V
e
r
d
i
c
t
 
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
 
"
1
4
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
 
s
t
i
l
l
W
o
r
k
s
 
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
0
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
s
t
i
l
l
W
o
r
k
s
 
?
 
O
K
 
:
 
S
D
}
`
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


 
 
 
 
 
 
 
 
{
s
t
i
l
l
W
o
r
k
s


 
 
 
 
 
 
 
 
 
 
?
 
<
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
 
O
K
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


 
 
 
 
 
 
 
 
 
 
:
 
<
P
o
w
e
r
 
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


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
s
t
a
t
e
l
e
s
s
"


 
 
 
 
 
 
 
 
 
 
 
 
?
 
(
a
l
i
v
e
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
 
<
>
<
b
>
T
o
t
a
l
 
o
u
t
a
g
e
.
<
/
b
>
 
E
v
e
r
y
 
s
e
r
v
e
r
 
i
s
 
d
o
w
n
.
 
N
o
t
h
i
n
g
 
s
t
a
t
e
l
e
s
s
 
c
a
n
 
f
i
x
 
t
h
i
s
.
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
<
>
<
b
>
U
s
e
r
 
k
e
e
p
s
 
w
o
r
k
i
n
g
.
<
/
b
>
 
{
a
l
i
v
e
.
l
e
n
g
t
h
}
/
4
 
s
e
r
v
e
r
s
 
h
e
a
l
t
h
y
 
-
 
t
h
e
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
r
o
u
t
e
s
 
a
r
o
u
n
d
 
t
h
e
 
d
e
a
d
 
o
n
e
s
.
 
<
e
m
>
A
n
y
<
/
e
m
>
 
s
u
r
v
i
v
i
n
g
 
b
o
x
 
c
a
n
 
a
n
s
w
e
r
.
<
/
>
)


 
 
 
 
 
 
 
 
 
 
 
 
:
 
(
s
e
s
s
i
o
n
A
l
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
<
>
<
b
>
U
s
e
r
 
s
t
i
l
l
 
l
o
g
g
e
d
 
i
n
.
<
/
b
>
 
S
2
 
(
t
h
e
 
b
o
x
 
h
o
l
d
i
n
g
 
t
h
e
i
r
 
s
e
s
s
i
o
n
)
 
i
s
 
a
l
i
v
e
.
 
B
u
t
 
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
 
o
n
e
 
c
r
a
s
h
 
a
w
a
y
 
f
r
o
m
 
d
i
s
a
s
t
e
r
.
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
<
>
<
b
>
U
s
e
r
 
l
o
g
g
e
d
 
o
u
t
.
<
/
b
>
 
T
h
e
 
o
n
e
 
s
e
r
v
e
r
 
t
h
a
t
 
r
e
m
e
m
b
e
r
e
d
 
t
h
e
m
 
j
u
s
t
 
d
i
e
d
.
 
T
h
e
 
o
t
h
e
r
 
{
a
l
i
v
e
.
l
e
n
g
t
h
}
 
h
e
a
l
t
h
y
 
s
e
r
v
e
r
s
 
a
r
e
 
u
s
e
l
e
s
s
 
t
o
 
t
h
i
s
 
u
s
e
r
 
-
 
t
h
e
y
 
d
o
n
&
r
s
q
u
o
;
t
 
h
a
v
e
 
t
h
e
 
s
e
s
s
i
o
n
.
<
/
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
T
h
e
 
u
n
l
o
c
k
:
<
/
b
>
 
h
o
r
i
z
o
n
t
a
l
 
s
c
a
l
i
n
g
 
=
 
m
o
r
e
 
b
o
x
e
s
.
 
B
u
t
 
&
l
d
q
u
o
;
m
o
r
e
 
b
o
x
e
s
&
r
d
q
u
o
;
 
o
n
l
y


 
 
 
 
 
 
 
 
 
 
h
e
l
p
s
 
i
f
 
a
n
y
 
b
o
x
 
c
a
n
 
s
e
r
v
e
 
a
n
y
 
u
s
e
r
.
 
T
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
 
w
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


 
 
 
 
 
 
 
 
 
 
m
a
k
i
n
g
 
s
e
r
v
i
c
e
s
 
s
t
a
t
e
l
e
s
s
 
-
 
i
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
 
p
r
e
c
o
n
d
i
t
i
o
n
 
f
o
r
 
e
v
e
r
y
t
h
i
n
g
 
e
l
s
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
 
W
h
e
r
e
 
s
t
a
t
e
 
a
c
t
u
a
l
l
y
 
l
i
v
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
u
b
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


 
 
i
c
o
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
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


 
 
h
o
w
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
o
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


 
 
v
e
r
d
i
c
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
;




c
o
n
s
t
 
S
T
R
A
T
E
G
I
E
S
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


 
 
 
 
i
d
:
 
"
r
e
d
i
s
"
,


 
 
 
 
t
i
t
l
e
:
 
"
E
x
t
e
r
n
a
l
 
s
e
s
s
i
o
n
 
s
t
o
r
e
 
(
R
e
d
i
s
 
/
 
M
e
m
c
a
c
h
e
d
)
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
C
l
a
s
s
i
c
 
a
n
s
w
e
r
 
-
 
m
o
v
e
 
s
t
a
t
e
 
o
u
t
 
o
f
 
t
h
e
 
s
e
r
v
e
r
"
,


 
 
 
 
i
c
o
n
:
 
<
D
a
t
a
b
a
s
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
"
 
/
>
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


 
 
 
 
h
o
w
:
 
"
A
p
p
 
s
e
r
v
e
r
s
 
s
t
a
y
 
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
 
O
n
 
l
o
g
i
n
,
 
s
t
o
r
e
 
s
e
s
s
i
o
n
 
i
n
 
R
e
d
i
s
 
k
e
y
e
d
 
b
y
 
s
e
s
s
i
o
n
-
i
d
.
 
E
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
 
l
o
o
k
s
 
u
p
 
R
e
d
i
s
.
"
,


 
 
 
 
p
r
o
s
:
 
[
"
A
n
y
 
a
p
p
 
s
e
r
v
e
r
 
c
a
n
 
a
n
s
w
e
r
"
,
 
"
S
e
r
v
e
r
s
 
c
a
n
 
d
i
e
 
w
i
t
h
o
u
t
 
l
o
g
g
i
n
g
 
a
n
y
o
n
e
 
o
u
t
"
,
 
"
S
e
s
s
i
o
n
 
s
u
r
v
i
v
e
s
 
d
e
p
l
o
y
s
"
]
,


 
 
 
 
c
o
n
s
:
 
[
"
R
e
d
i
s
 
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
s
t
r
u
c
t
u
r
e
"
,
 
"
O
n
e
 
e
x
t
r
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
 
p
e
r
 
r
e
q
u
e
s
t
"
,
 
"
N
o
w
 
y
o
u
 
n
e
e
d
 
t
o
 
s
c
a
l
e
 
R
e
d
i
s
 
t
o
o
"
]
,


 
 
 
 
v
e
r
d
i
c
t
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
 
a
t
 
m
o
s
t
 
c
o
m
p
a
n
i
e
s
.
 
S
i
m
p
l
e
,
 
p
r
o
v
e
n
,
 
s
c
a
l
e
s
 
w
e
l
l
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
j
w
t
"
,


 
 
 
 
t
i
t
l
e
:
 
"
J
W
T
 
(
s
e
l
f
-
c
o
n
t
a
i
n
e
d
 
t
o
k
e
n
s
)
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
N
o
 
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
 
s
t
o
r
a
g
e
 
a
t
 
a
l
l
"
,


 
 
 
 
i
c
o
n
:
 
<
K
e
y
 
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
"
 
/
>
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


 
 
 
 
h
o
w
:
 
"
S
e
r
v
e
r
 
s
i
g
n
s
 
a
 
t
o
k
e
n
 
c
o
n
t
a
i
n
i
n
g
 
u
s
e
r
 
i
d
 
+
 
c
l
a
i
m
s
.
 
C
l
i
e
n
t
 
s
e
n
d
s
 
i
t
 
o
n
 
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
.
 
S
e
r
v
e
r
 
v
e
r
i
f
i
e
s
 
t
h
e
 
s
i
g
n
a
t
u
r
e
 
-
 
n
o
 
l
o
o
k
u
p
 
n
e
e
d
e
d
.
"
,


 
 
 
 
p
r
o
s
:
 
[
"
Z
e
r
o
 
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
 
s
t
a
t
e
 
-
 
t
r
u
l
y
 
s
t
a
t
e
l
e
s
s
"
,
 
"
N
o
 
s
e
s
s
i
o
n
-
s
t
o
r
e
 
t
o
 
s
c
a
l
e
"
,
 
"
G
r
e
a
t
 
f
o
r
 
m
o
b
i
l
e
 
a
n
d
 
m
i
c
r
o
s
e
r
v
i
c
e
s
"
]
,


 
 
 
 
c
o
n
s
:
 
[
"
C
a
n
'
t
 
r
e
v
o
k
e
 
b
e
f
o
r
e
 
e
x
p
i
r
y
 
(
w
i
t
h
o
u
t
 
a
 
b
l
o
c
k
l
i
s
t
)
"
,
 
"
T
o
k
e
n
 
s
i
z
e
 
g
r
o
w
s
 
w
i
t
h
 
c
l
a
i
m
s
"
,
 
"
R
o
t
a
t
i
n
g
 
s
i
g
n
i
n
g
 
k
e
y
s
 
i
s
 
t
r
i
c
k
y
"
]
,


 
 
 
 
v
e
r
d
i
c
t
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
 
A
P
I
s
 
a
n
d
 
m
i
c
r
o
s
e
r
v
i
c
e
s
.
 
R
i
s
k
y
 
f
o
r
 
h
i
g
h
-
s
t
a
k
e
s
 
s
e
s
s
i
o
n
s
 
t
h
a
t
 
n
e
e
d
 
i
n
s
t
a
n
t
 
r
e
v
o
c
a
t
i
o
n
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


 
 
 
 
t
i
t
l
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
-
b
a
c
k
e
d
 
s
e
s
s
i
o
n
s
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
S
e
s
s
i
o
n
s
 
i
n
 
t
h
e
 
m
a
i
n
 
D
B
"
,


 
 
 
 
i
c
o
n
:
 
<
D
a
t
a
b
a
s
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
"
 
/
>
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


 
 
 
 
h
o
w
:
 
"
S
e
s
s
i
o
n
 
r
o
w
 
i
n
 
a
 
s
e
s
s
i
o
n
s
 
t
a
b
l
e
,
 
k
e
y
e
d
 
b
y
 
s
e
s
s
i
o
n
-
i
d
.
 
E
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
 
r
e
a
d
s
 
o
n
e
 
r
o
w
.
"
,


 
 
 
 
p
r
o
s
:
 
[
"
N
o
 
n
e
w
 
i
n
f
r
a
s
t
r
u
c
t
u
r
e
"
,
 
"
E
a
s
y
 
t
o
 
q
u
e
r
y
 
/
 
a
u
d
i
t
 
/
 
r
e
v
o
k
e
"
]
,


 
 
 
 
c
o
n
s
:
 
[
"
H
i
g
h
 
r
e
a
d
 
v
o
l
u
m
e
 
o
n
 
y
o
u
r
 
m
a
i
n
 
D
B
"
,
 
"
S
l
o
w
e
r
 
t
h
a
n
 
R
e
d
i
s
"
,
 
"
D
B
 
b
e
c
o
m
e
s
 
h
o
t
s
p
o
t
"
]
,


 
 
 
 
v
e
r
d
i
c
t
:
 
"
F
i
n
e
 
f
o
r
 
s
m
a
l
l
 
a
p
p
s
.
 
M
o
s
t
 
t
e
a
m
s
 
m
o
v
e
 
t
o
 
R
e
d
i
s
 
o
n
c
e
 
t
r
a
f
f
i
c
 
g
r
o
w
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
s
t
i
c
k
y
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
(
o
n
 
t
h
e
 
l
o
a
d
 
b
a
l
a
n
c
e
r
)
"
,


 
 
 
 
s
u
b
t
i
t
l
e
:
 
"
E
s
c
a
p
e
 
h
a
t
c
h
 
-
 
k
e
e
p
 
s
t
a
t
e
 
o
n
 
t
h
e
 
s
e
r
v
e
r
 
b
u
t
 
p
i
n
 
t
h
e
 
u
s
e
r
"
,


 
 
 
 
i
c
o
n
:
 
<
C
o
o
k
i
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
"
 
/
>
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


 
 
 
 
h
o
w
:
 
"
L
o
a
d
 
b
a
l
a
n
c
e
r
 
r
o
u
t
e
s
 
t
h
e
 
s
a
m
e
 
u
s
e
r
 
t
o
 
t
h
e
 
s
a
m
e
 
s
e
r
v
e
r
 
e
v
e
r
y
 
t
i
m
e
 
(
c
o
o
k
i
e
 
o
r
 
I
P
 
h
a
s
h
)
.
 
T
h
e
 
s
e
r
v
e
r
 
h
o
l
d
s
 
t
h
e
 
s
e
s
s
i
o
n
 
i
n
 
l
o
c
a
l
 
m
e
m
o
r
y
.
"
,


 
 
 
 
p
r
o
s
:
 
[
"
S
i
m
p
l
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
 
n
o
 
e
x
t
r
a
 
i
n
f
r
a
"
,
 
"
F
a
s
t
e
s
t
 
-
 
z
e
r
o
 
l
o
o
k
u
p
s
"
,
 
"
W
o
r
k
s
 
f
o
r
 
l
e
g
a
c
y
 
a
p
p
s
"
]
,


 
 
 
 
c
o
n
s
:
 
[
"
S
e
r
v
e
r
 
d
i
e
s
 
=
 
s
e
s
s
i
o
n
 
l
o
s
t
"
,
 
"
U
n
e
v
e
n
 
l
o
a
d
 
a
c
r
o
s
s
 
s
e
r
v
e
r
s
"
,
 
"
H
a
r
d
 
t
o
 
d
e
p
l
o
y
 
/
 
r
e
s
t
a
r
t
 
w
i
t
h
o
u
t
 
b
r
e
a
k
i
n
g
 
u
s
e
r
s
"
]
,


 
 
 
 
v
e
r
d
i
c
t
:
 
"
L
a
s
t
 
r
e
s
o
r
t
.
 
U
s
e
 
o
n
l
y
 
w
h
e
n
 
m
a
k
i
n
g
 
t
h
e
 
a
p
p
 
s
t
a
t
e
l
e
s
s
 
i
s
n
'
t
 
f
e
a
s
i
b
l
e
.
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
 
W
h
e
r
e
S
t
a
t
e
L
i
v
e
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
r
e
d
i
s
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
I
f
 
t
h
e
 
s
e
r
v
e
r
 
c
a
n
&
r
s
q
u
o
;
t
 
h
o
l
d
 
s
t
a
t
e
&
h
e
l
l
i
p
;
 
w
h
e
r
e
 
d
o
e
s
 
i
t
 
g
o
?
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
t
e
l
e
s
s
&
r
d
q
u
o
;
 
d
o
e
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
 
m
e
a
n
 
s
t
a
t
e
 
d
i
s
a
p
p
e
a
r
s
 
-
 
i
t
 
m
e
a
n
s
 
s
t
a
t
e
 
m
o
v
e
s


 
 
 
 
 
 
 
 
<
e
m
>
 
o
u
t
 
<
/
e
m
>
o
f
 
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
 
F
o
u
r
 
c
o
m
m
o
n
 
p
l
a
c
e
s
 
t
o
 
p
u
t
 
i
t
,
 
e
a
c
h
 
w
i
t
h
 
s
h
a
r
p
 
t
r
a
d
e
o
f
f
s
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
S
T
R
A
T
E
G
I
E
S
.
m
a
p
(
(
s
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
 
s
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
s
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
 
s
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
 
s
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
6
,
 
h
e
i
g
h
t
:
 
3
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
s
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
 
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
c
o
n
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
s
.
t
i
t
l
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
s
.
s
u
b
t
i
t
l
e
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
A
r
r
o
w
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
f
o
r
m
:
 
i
s
O
p
e
n
 
?
 
"
r
o
t
a
t
e
(
9
0
d
e
g
)
"
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
t
r
a
n
s
f
o
r
m
 
1
6
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}
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
 
h
e
i
g
h
t
:
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
h
e
i
g
h
t
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
2
 
}
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
 
s
.
c
o
l
o
r
 
}
}
>
H
o
w
 
i
t
 
w
o
r
k
s
:
<
/
b
>
 
{
s
.
h
o
w
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
2
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
R
O
S


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
p
r
o
s
.
m
a
p
(
(
p
,
 
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
3
.
5
 
h
-
3
.
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
 
O
K
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
 
3
 
}
}
 
/
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
 
}
}
>
{
p
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
O
N
S


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
c
o
n
s
.
m
a
p
(
(
c
,
 
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
 
3
 
}
}
 
/
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
 
}
}
>
{
c
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
s
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
>
V
e
r
d
i
c
t
:
<
/
b
>
 
{
s
.
v
e
r
d
i
c
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
S
t
a
t
e
l
e
s
s
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
d
e
f
"
,
 
 
 
l
a
b
e
l
:
 
"
A
n
y
 
S
e
r
v
e
r
 
v
s
 
O
n
e
 
S
e
r
v
e
r
"
,
 
i
c
o
n
:
 
<
S
e
r
v
e
r
 
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
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
k
i
l
l
"
,
 
 
l
a
b
e
l
:
 
"
K
i
l
l
-
a
-
S
e
r
v
e
r
 
D
e
m
o
"
,
 
 
 
 
 
 
 
i
c
o
n
:
 
<
P
o
w
e
r
 
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
K
i
l
l
S
e
r
v
e
r
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
s
t
a
t
e
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
 
S
t
a
t
e
 
L
i
v
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
D
a
t
a
b
a
s
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
W
h
e
r
e
S
t
a
t
e
L
i
v
e
s
 
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
 
s
t
a
t
e
l
e
s
s
 
s
e
r
v
i
c
e
 
m
e
a
n
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
T
h
e
 
s
e
r
v
i
c
e
 
n
e
v
e
r
 
s
t
o
r
e
s
 
a
n
y
 
d
a
t
a
 
a
n
y
w
h
e
r
e
.
"
,


 
 
 
 
 
 
 
 
"
E
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
 
c
a
r
r
i
e
s
 
e
v
e
r
y
t
h
i
n
g
 
t
h
e
 
s
e
r
v
e
r
 
n
e
e
d
s
 
-
 
a
n
y
 
s
e
r
v
e
r
 
i
n
s
t
a
n
c
e
 
c
a
n
 
h
a
n
d
l
e
 
i
t
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
s
e
r
v
i
c
e
 
h
a
s
 
n
o
 
d
a
t
a
b
a
s
e
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
s
e
r
v
i
c
e
 
d
o
e
s
n
'
t
 
u
s
e
 
H
T
T
P
S
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
S
t
a
t
e
l
e
s
s
 
i
s
 
a
b
o
u
t
 
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
,
 
n
o
t
 
t
h
e
 
s
y
s
t
e
m
.
 
S
t
a
t
e
 
s
t
i
l
l
 
e
x
i
s
t
s
 
-
 
i
t
 
j
u
s
t
 
l
i
v
e
s
 
s
o
m
e
w
h
e
r
e
 
e
x
t
e
r
n
a
l
 
(
R
e
d
i
s
,
 
D
B
,
 
o
r
 
t
h
e
 
t
o
k
e
n
 
i
t
s
e
l
f
)
 
s
o
 
a
n
y
 
s
e
r
v
e
r
 
c
a
n
 
s
e
r
v
e
 
a
n
y
 
r
e
q
u
e
s
t
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
y
 
i
s
 
s
t
a
t
e
l
e
s
s
n
e
s
s
 
t
h
e
 
p
r
e
c
o
n
d
i
t
i
o
n
 
f
o
r
 
h
o
r
i
z
o
n
t
a
l
 
s
c
a
l
i
n
g
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
S
t
a
t
e
l
e
s
s
 
s
e
r
v
e
r
s
 
u
s
e
 
l
e
s
s
 
C
P
U
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
c
a
n
 
o
n
l
y
 
r
o
u
t
e
 
t
o
 
s
t
a
t
e
l
e
s
s
 
s
e
r
v
e
r
s
.
"
,


 
 
 
 
 
 
 
 
"
Y
o
u
 
c
a
n
 
a
d
d
 
/
 
r
e
m
o
v
e
 
/
 
k
i
l
l
 
s
e
r
v
e
r
s
 
f
r
e
e
l
y
 
b
e
c
a
u
s
e
 
a
n
y
 
b
o
x
 
c
a
n
 
s
e
r
v
e
 
a
n
y
 
u
s
e
r
.
"
,


 
 
 
 
 
 
 
 
"
S
t
a
t
e
l
e
s
s
 
c
o
d
e
 
c
o
m
p
i
l
e
s
 
f
a
s
t
e
r
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
 
2
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
 
s
c
a
l
i
n
g
 
o
n
l
y
 
w
o
r
k
s
 
i
f
 
a
d
d
i
n
g
 
b
o
x
e
s
 
a
c
t
u
a
l
l
y
 
a
d
d
s
 
c
a
p
a
c
i
t
y
.
 
I
f
 
e
a
c
h
 
u
s
e
r
 
i
s
 
p
i
n
n
e
d
 
t
o
 
o
n
e
 
b
o
x
,
 
a
d
d
i
n
g
 
m
o
r
e
 
b
o
x
e
s
 
d
o
e
s
n
'
t
 
h
e
l
p
 
t
h
a
t
 
u
s
e
r
 
-
 
a
n
d
 
l
o
s
i
n
g
 
a
 
b
o
x
 
l
o
g
s
 
t
h
e
m
 
o
u
t
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
 
m
o
v
e
 
s
e
s
s
i
o
n
s
 
f
r
o
m
 
a
p
p
-
s
e
r
v
e
r
 
m
e
m
o
r
y
 
t
o
 
R
e
d
i
s
.
 
T
h
e
 
m
a
i
n
 
b
e
n
e
f
i
t
 
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
L
o
w
e
r
 
l
a
t
e
n
c
y
 
p
e
r
 
r
e
q
u
e
s
t
.
"
,


 
 
 
 
 
 
 
 
"
L
e
s
s
 
c
o
d
e
 
t
o
 
w
r
i
t
e
.
"
,


 
 
 
 
 
 
 
 
"
A
n
y
 
a
p
p
 
s
e
r
v
e
r
 
c
a
n
 
s
e
r
v
e
 
a
n
y
 
u
s
e
r
;
 
r
e
s
t
a
r
t
i
n
g
 
/
 
d
e
p
l
o
y
i
n
g
 
/
 
c
r
a
s
h
i
n
g
 
s
e
r
v
e
r
s
 
n
o
 
l
o
n
g
e
r
 
l
o
g
s
 
u
s
e
r
s
 
o
u
t
.
"
,


 
 
 
 
 
 
 
 
"
Y
o
u
 
n
o
 
l
o
n
g
e
r
 
n
e
e
d
 
a
 
l
o
a
d
 
b
a
l
a
n
c
e
r
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
 
2
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
v
i
n
g
 
s
t
a
t
e
 
o
u
t
 
o
f
 
a
p
p
 
m
e
m
o
r
y
 
i
s
 
w
h
a
t
 
m
a
k
e
s
 
t
h
e
 
f
l
e
e
t
 
t
r
u
l
y
 
i
n
t
e
r
c
h
a
n
g
e
a
b
l
e
.
 
Y
o
u
 
a
d
d
 
a
n
 
e
x
t
r
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
,
 
b
u
t
 
y
o
u
 
g
a
i
n
 
d
e
p
l
o
y
 
f
r
e
e
d
o
m
 
a
n
d
 
f
a
u
l
t
 
t
o
l
e
r
a
n
c
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
 
d
o
w
n
s
i
d
e
 
o
f
 
u
s
i
n
g
 
J
W
T
s
 
i
n
s
t
e
a
d
 
o
f
 
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
 
s
e
s
s
i
o
n
s
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
h
e
y
 
r
e
q
u
i
r
e
 
a
 
d
a
t
a
b
a
s
e
.
"
,


 
 
 
 
 
 
 
 
"
Y
o
u
 
c
a
n
'
t
 
r
e
v
o
k
e
 
a
 
v
a
l
i
d
 
t
o
k
e
n
 
b
e
f
o
r
e
 
i
t
s
 
e
x
p
i
r
y
 
w
i
t
h
o
u
t
 
e
x
t
r
a
 
m
a
c
h
i
n
e
r
y
 
(
a
 
b
l
o
c
k
l
i
s
t
)
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
o
n
l
y
 
w
o
r
k
 
o
v
e
r
 
H
T
T
P
,
 
n
o
t
 
H
T
T
P
S
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
s
e
r
v
e
r
 
h
a
s
 
t
o
 
c
a
l
l
 
t
h
e
 
c
l
i
e
n
t
 
f
o
r
 
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
J
W
T
s
 
a
r
e
 
s
e
l
f
-
c
o
n
t
a
i
n
e
d
 
a
n
d
 
v
e
r
i
f
i
e
d
 
b
y
 
s
i
g
n
a
t
u
r
e
 
-
 
n
o
 
s
e
r
v
e
r
 
l
o
o
k
u
p
.
 
T
h
a
t
'
s
 
a
l
s
o
 
w
h
y
 
i
n
s
t
a
n
t
 
r
e
v
o
c
a
t
i
o
n
 
i
s
 
h
a
r
d
:
 
t
h
e
r
e
'
s
 
n
o
 
c
e
n
t
r
a
l
 
p
l
a
c
e
 
t
o
 
s
a
y
 
'
t
h
i
s
 
t
o
k
e
n
 
i
s
 
n
o
 
l
o
n
g
e
r
 
v
a
l
i
d
'
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
e
n
 
a
r
e
 
s
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
t
h
e
 
r
i
g
h
t
 
c
a
l
l
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
A
l
w
a
y
s
 
-
 
t
h
e
y
'
r
e
 
t
h
e
 
f
a
s
t
e
s
t
 
o
p
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
F
o
r
 
n
e
w
 
g
r
e
e
n
f
i
e
l
d
 
a
p
p
s
 
b
u
i
l
t
 
o
n
 
m
i
c
r
o
s
e
r
v
i
c
e
s
.
"
,


 
 
 
 
 
 
 
 
"
R
a
r
e
l
y
 
-
 
a
s
 
a
 
l
a
s
t
-
r
e
s
o
r
t
 
e
s
c
a
p
e
 
h
a
t
c
h
 
w
h
e
n
 
t
h
e
 
a
p
p
 
c
a
n
'
t
 
b
e
 
m
a
d
e
 
s
t
a
t
e
l
e
s
s
 
(
e
.
g
.
,
 
l
e
g
a
c
y
 
s
y
s
t
e
m
s
)
.
"
,


 
 
 
 
 
 
 
 
"
F
o
r
 
s
t
a
t
e
l
e
s
s
 
R
E
S
T
 
A
P
I
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
 
2
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
S
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
p
i
n
 
u
s
e
r
s
 
t
o
 
s
p
e
c
i
f
i
c
 
s
e
r
v
e
r
s
.
 
Y
o
u
 
l
o
s
e
 
t
h
e
 
f
a
u
l
t
-
t
o
l
e
r
a
n
c
e
 
a
n
d
 
s
c
a
l
i
n
g
 
b
e
n
e
f
i
t
s
 
o
f
 
a
 
s
t
a
t
e
l
e
s
s
 
f
l
e
e
t
.
 
S
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
 
t
r
e
a
t
 
t
h
i
s
 
a
s
 
a
n
 
e
s
c
a
p
e
 
h
a
t
c
h
,
 
n
o
t
 
a
 
d
e
f
a
u
l
t
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
S
t
a
t
e
l
e
s
s
 
v
s
 
S
t
a
t
e
f
u
l
 
S
e
r
v
i
c
e
s
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
5
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
T
h
e
 
h
i
d
d
e
n
 
p
r
e
c
o
n
d
i
t
i
o
n
 
t
h
a
t
 
m
a
k
e
s
 
h
o
r
i
z
o
n
t
a
l
 
s
c
a
l
i
n
g
 
a
c
t
u
a
l
l
y
 
w
o
r
k
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


