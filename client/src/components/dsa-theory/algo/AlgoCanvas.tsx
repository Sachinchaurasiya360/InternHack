
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
 
R
e
a
c
t
N
o
d
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
 
P
l
a
y
e
r
C
o
n
t
r
o
l
s
,
 
t
y
p
e
 
S
t
e
p
P
l
a
y
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
S
t
e
p
P
l
a
y
e
r
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
l
g
o
C
a
n
v
a
s
P
r
o
p
s
<
T
>
 
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


 
 
p
l
a
y
e
r
:
 
S
t
e
p
P
l
a
y
e
r
<
T
>
;


 
 
i
n
p
u
t
?
:
 
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


 
 
p
s
e
u
d
o
c
o
d
e
?
:
 
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


 
 
v
a
r
i
a
b
l
e
s
?
:
 
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
h
i
l
d
r
e
n
:
 
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


}




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
 
A
l
g
o
C
a
n
v
a
s
<
T
>
(
{


 
 
t
i
t
l
e
,


 
 
p
l
a
y
e
r
,


 
 
i
n
p
u
t
,


 
 
p
s
e
u
d
o
c
o
d
e
,


 
 
v
a
r
i
a
b
l
e
s
,


 
 
c
h
i
l
d
r
e
n
,


}
:
 
A
l
g
o
C
a
n
v
a
s
P
r
o
p
s
<
T
>
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
S
i
d
e
P
a
n
e
l
s
 
=
 
p
s
e
u
d
o
c
o
d
e
 
|
|
 
v
a
r
i
a
b
l
e
s
;


 
 
c
o
n
s
t
 
h
a
s
I
n
p
u
t
R
a
i
l
 
=
 
!
!
i
n
p
u
t
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
p
x
-
4
 
p
y
-
3
 
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
 
f
l
e
x
-
w
r
a
p
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
i
n
-
w
-
0
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
v
i
s
u
a
l
i
z
a
t
i
o
n


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
r
a
c
k
i
n
g
-
t
i
g
h
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
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
P
l
a
y
e
r
C
o
n
t
r
o
l
s
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
h
a
s
I
n
p
u
t
R
a
i
l
 
&
&
 
h
a
s
S
i
d
e
P
a
n
e
l
s


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
[
2
6
0
p
x
_
1
f
r
_
2
6
0
p
x
]
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
h
a
s
I
n
p
u
t
R
a
i
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
[
2
6
0
p
x
_
1
f
r
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
h
a
s
S
i
d
e
P
a
n
e
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
[
1
f
r
_
2
6
0
p
x
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
1
"


 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
h
a
s
I
n
p
u
t
R
a
i
l
 
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
l
g
:
b
o
r
d
e
r
-
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
 
p
-
4
"
>
{
i
n
p
u
t
}
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
{
`
p
-
4
 
l
g
:
p
-
6
 
m
i
n
-
w
-
0
 
b
o
r
d
e
r
-
t
 
l
g
:
b
o
r
d
e
r
-
t
-
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
h
a
s
I
n
p
u
t
R
a
i
l
 
?
 
"
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
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
h
a
s
S
i
d
e
P
a
n
e
l
s
 
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
l
g
:
b
o
r
d
e
r
-
l
 
b
o
r
d
e
r
-
t
 
l
g
:
b
o
r
d
e
r
-
t
-
0
 
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
 
p
-
3
 
s
p
a
c
e
-
y
-
3
 
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
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
s
e
u
d
o
c
o
d
e
}


 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
r
i
a
b
l
e
s
}


 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
>


 
 
)
;


}


