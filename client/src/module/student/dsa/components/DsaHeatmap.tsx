
i
m
p
o
r
t
 
R
e
a
c
t
,
 
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
M
e
m
o
 
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
 
A
c
t
i
v
i
t
y
C
a
l
e
n
d
a
r
 
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
a
c
t
i
v
i
t
y
-
c
a
l
e
n
d
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
 
u
s
e
T
h
e
m
e
S
t
o
r
e
 
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
.
.
/
l
i
b
/
t
h
e
m
e
.
s
t
o
r
e
"
;




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
c
t
i
v
i
t
y
R
e
s
p
o
n
s
e
 
{


 
 
d
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
A
c
t
i
v
i
t
y
D
a
t
e
 
=
 
(
d
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
)
 
=
>
 
{


 
 
c
o
n
s
t
 
[
y
e
a
r
,
 
m
o
n
t
h
,
 
d
a
y
]
 
=
 
d
a
t
e
.
s
p
l
i
t
(
"
-
"
)
.
m
a
p
(
N
u
m
b
e
r
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
w
 
D
a
t
e
(
y
e
a
r
,
 
(
m
o
n
t
h
 
?
?
 
1
)
 
-
 
1
,
 
d
a
y
 
?
?
 
1
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
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
,
 
{


 
 
 
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,


 
 
 
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
,


 
 
 
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
,


 
 
}
)
;


}
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
D
s
a
H
e
a
t
m
a
p
(
)
 
{


 
 
c
o
n
s
t
 
[
y
e
a
r
,
 
s
e
t
Y
e
a
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
(
n
e
w
 
D
a
t
e
(
)
.
g
e
t
U
T
C
F
u
l
l
Y
e
a
r
(
)
)
;


 
 
c
o
n
s
t
 
t
h
e
m
e
 
=
 
u
s
e
T
h
e
m
e
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
t
h
e
m
e
)
;




 
 
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
d
s
a
.
a
c
t
i
v
i
t
y
(
y
e
a
r
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
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
A
c
t
i
v
i
t
y
R
e
s
p
o
n
s
e
[
]
>
(
`
/
d
s
a
/
a
c
t
i
v
i
t
y
?
y
e
a
r
=
$
{
y
e
a
r
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
 
r
e
s
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
y
e
a
r
 
<
 
n
e
w
 
D
a
t
e
(
)
.
g
e
t
U
T
C
F
u
l
l
Y
e
a
r
(
)
 
?
 
I
n
f
i
n
i
t
y
 
:
 
1
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
h
e
a
t
m
a
p
D
a
t
a
 
=
 
u
s
e
M
e
m
o
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
 
a
c
t
i
v
i
t
y
M
a
p
 
=
 
n
e
w
 
M
a
p
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
(
)
;


 
 
 
 
i
f
 
(
d
a
t
a
)
 
{


 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
i
t
e
m
 
o
f
 
d
a
t
a
)
 
{


 
 
 
 
 
 
 
 
a
c
t
i
v
i
t
y
M
a
p
.
s
e
t
(
i
t
e
m
.
d
a
t
e
,
 
i
t
e
m
.
c
o
u
n
t
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
r
e
s
u
l
t
 
=
 
[
]
;


 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
D
a
t
e
.
U
T
C
(
y
e
a
r
,
 
0
,
 
1
)
)
;


 
 
 
 
c
o
n
s
t
 
e
n
d
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
D
a
t
e
.
U
T
C
(
y
e
a
r
,
 
1
1
,
 
3
1
)
)
;




 
 
 
 
f
o
r
 
(
l
e
t
 
d
 
=
 
n
e
w
 
D
a
t
e
(
s
t
a
r
t
D
a
t
e
)
;
 
d
 
<
=
 
e
n
d
D
a
t
e
;
 
d
.
s
e
t
U
T
C
D
a
t
e
(
d
.
g
e
t
U
T
C
D
a
t
e
(
)
 
+
 
1
)
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
e
S
t
r
 
=
 
d
.
t
o
I
S
O
S
t
r
i
n
g
(
)
.
s
p
l
i
t
(
"
T
"
)
[
0
]
;


 
 
 
 
 
 
c
o
n
s
t
 
c
o
u
n
t
 
=
 
a
c
t
i
v
i
t
y
M
a
p
.
g
e
t
(
d
a
t
e
S
t
r
)
 
|
|
 
0
;




 
 
 
 
 
 
l
e
t
 
l
e
v
e
l
 
=
 
0
;


 
 
 
 
 
 
i
f
 
(
c
o
u
n
t
 
=
=
=
 
1
)
 
l
e
v
e
l
 
=
 
1
;


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
c
o
u
n
t
 
>
=
 
2
 
&
&
 
c
o
u
n
t
 
<
=
 
3
)
 
l
e
v
e
l
 
=
 
2
;


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
c
o
u
n
t
 
>
=
 
4
 
&
&
 
c
o
u
n
t
 
<
=
 
6
)
 
l
e
v
e
l
 
=
 
3
;


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
c
o
u
n
t
 
>
=
 
7
)
 
l
e
v
e
l
 
=
 
4
;




 
 
 
 
 
 
r
e
s
u
l
t
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
d
a
t
e
:
 
d
a
t
e
S
t
r
,


 
 
 
 
 
 
 
 
c
o
u
n
t
,


 
 
 
 
 
 
 
 
l
e
v
e
l
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
;


 
 
}
,
 
[
d
a
t
a
,
 
y
e
a
r
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
S
o
l
v
e
d
T
h
i
s
Y
e
a
r
 
=
 
h
e
a
t
m
a
p
D
a
t
a
.
r
e
d
u
c
e
(
(
a
c
c
,
 
c
u
r
r
)
 
=
>
 
a
c
c
 
+
 
c
u
r
r
.
c
o
u
n
t
,
 
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
b
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
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
>
<
/
d
i
v
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
p
r
a
c
t
i
c
e
 
h
i
s
t
o
r
y


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
{
/
*
 
Y
e
a
r
 
S
e
l
e
c
t
o
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
 
p
-
1
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
Y
e
a
r
(
y
e
a
r
 
-
 
1
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
p
-
1
 
r
o
u
n
d
e
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
5
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
s
t
o
n
e
-
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
1
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
w
h
i
t
e
/
5
 
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
r
e
v
i
o
u
s
 
y
e
a
r
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
x
s
 
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
m
e
d
i
u
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
 
p
x
-
2
 
m
i
n
-
w
-
[
3
r
e
m
]
 
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
y
e
a
r
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
Y
e
a
r
(
y
e
a
r
 
+
 
1
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
y
e
a
r
 
>
=
 
n
e
w
 
D
a
t
e
(
)
.
g
e
t
U
T
C
F
u
l
l
Y
e
a
r
(
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
p
-
1
 
r
o
u
n
d
e
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
5
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
s
t
o
n
e
-
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
1
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
w
h
i
t
e
/
5
 
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
3
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
h
o
v
e
r
:
b
g
-
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
 
d
i
s
a
b
l
e
d
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
s
t
o
n
e
-
5
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
e
x
t
 
y
e
a
r
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
 
p
-
4
 
s
m
:
p
-
6
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
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
f
u
l
l
 
f
l
e
x
 
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
 
[
&
_
.
r
e
a
c
t
-
a
c
t
i
v
i
t
y
-
c
a
l
e
n
d
a
r
]
:
w
-
f
u
l
l
 
[
&
_
s
v
g
]
:
w
-
f
u
l
l
 
[
&
_
s
v
g
]
:
h
-
a
u
t
o
 
[
&
_
s
v
g
]
:
m
a
x
-
w
-
[
8
5
0
p
x
]
"
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
h
-
[
1
2
0
p
x
]
 
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
 
w
-
f
u
l
l
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
"
>
L
o
a
d
i
n
g
 
h
i
s
t
o
r
y
.
.
.
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
w
-
f
u
l
l
 
f
l
e
x
 
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
A
c
t
i
v
i
t
y
C
a
l
e
n
d
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
=
{
h
e
a
t
m
a
p
D
a
t
a
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
m
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
g
h
t
:
 
[
"
#
f
5
f
5
f
4
"
,
 
"
#
d
9
f
9
9
d
"
,
 
"
#
a
3
e
6
3
5
"
,
 
"
#
6
5
a
3
0
d
"
,
 
"
#
3
f
6
2
1
2
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
a
r
k
:
 
[
"
#
1
c
1
9
1
7
"
,
 
"
#
d
9
f
9
9
d
"
,
 
"
#
a
3
e
6
3
5
"
,
 
"
#
6
5
a
3
0
d
"
,
 
"
#
3
f
6
2
1
2
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
S
c
h
e
m
e
=
{
t
h
e
m
e
 
=
=
=
 
"
d
a
r
k
"
 
?
 
"
d
a
r
k
"
 
:
 
"
l
i
g
h
t
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
S
i
z
e
=
{
1
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
M
a
r
g
i
n
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
`
{
{
c
o
u
n
t
}
}
 
p
r
o
b
l
e
m
s
 
s
o
l
v
e
d
 
i
n
 
$
{
y
e
a
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
o
w
C
o
l
o
r
L
e
g
e
n
d
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
o
w
T
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
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
n
d
e
r
B
l
o
c
k
=
{
(
b
l
o
c
k
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
E
l
e
m
e
n
t
,
 
a
c
t
i
v
i
t
y
:
 
{
 
d
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
 
l
e
v
e
l
:
 
n
u
m
b
e
r
 
}
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
a
c
t
.
c
l
o
n
e
E
l
e
m
e
n
t
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
i
t
l
e
>
{
`
$
{
a
c
t
i
v
i
t
y
.
c
o
u
n
t
}
 
p
r
o
b
l
e
m
s
 
s
o
l
v
e
d
 
o
n
 
$
{
f
o
r
m
a
t
A
c
t
i
v
i
t
y
D
a
t
e
(
a
c
t
i
v
i
t
y
.
d
a
t
e
)
}
`
}
<
/
t
i
t
l
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
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
T
h
i
s
Y
e
a
r
}
 
p
r
o
b
l
e
m
s
 
t
h
i
s
 
y
e
a
r


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
L
e
s
s
<
/
s
p
a
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
f
l
e
x
 
g
a
p
-
1
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
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
s
t
o
n
e
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
[
#
1
c
1
9
1
7
]
 
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
5
"
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
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
l
i
m
e
-
2
0
0
"
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
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
l
i
m
e
-
4
0
0
"
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
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
l
i
m
e
-
6
0
0
"
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
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
l
i
m
e
-
8
0
0
"
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
s
p
a
n
>
M
o
r
e
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


 
 
)
;


}


